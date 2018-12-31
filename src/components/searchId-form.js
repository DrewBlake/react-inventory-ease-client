import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {deleteVehicle, updateVehicle, getVehicleId} from '../actions';


//Form used to search for vehicle by Id
export class SearchIdForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            auto: [],      
            isActive: false,
            displayDelete: false,
            id: '',
            mileage: 'mileage: ',
            parkingSpace: 'Parking Space: '
        }
    }

    displayButton() {
        this.setState({
            isActive: true
        });
    }

   
    onSubmit(event) {
        event.preventDefault();
        this.displayButton();
        const value = this.id.value.trim();
        this.props.dispatch(getVehicleId(value));
        this.setState({
            displayDelete: false,
            id: value
        });
        
        this.id.value = '';
    }

    removeVehicle() {   
        this.props.dispatch(deleteVehicle(this.state.id));
        this.setState({
            isActive: false,
            auto: [],
            displayDelete: true,
            id: ''
        });
    }

    submitUpdate(event) {
        event.preventDefault();
        const mileage = this.miles.value;
        const parkingSpace = this.spot.value;
        const id = this.state.id;
        const updateInfo = {
            id,
            mileage,
            parkingSpace
        }
        this.props.dispatch(updateVehicle(updateInfo));
        this.miles.value = '';
        this.spot.value = '';
    }
     

    render() { 
        if (this.props.authToken === null) {
            return <Redirect to='/' />;           
        } 
        return (
            <div>
                <section className="info">
                    <header role="banner">
                        <h2>Search By Vehicle ID</h2>
                        <h3>Gives information for specific vehicle selected</h3>
                        <h3>Allows you to update vehicle info</h3>
                        <h3>If Id not available copy and paste Id from 'Search All' list above</h3>
                    </header>
                    <form onSubmit={(e) => this.onSubmit(e)}>   
                        <label htmlFor="id">Enter ID</label>
                        <input type="text" name='id' id='id' 
                            ref={input => this.id = input} required />
                        <button type='submit'>Search</button>
                    </form>

                    {!(this.props.validVehicleId)&&<h3>{this.props.errorMessage}</h3>}
                    {this.props.validVehicleId&&
                    <div>
                        <div className="vehicleList" aria-live="assertive">
                            <h3>{this.props.auto.year} {this.props.auto.make} {this.props.auto.model}</h3>
                            <h4>{this.state.mileage} {this.props.auto.mileage}</h4>
                            <h4>{this.state.parkingSpace} {this.props.auto.parkingSpace}</h4>
                        </div>
                        <div className={this.state.isActive?'show':'hidden'} aria-live="assertive">
                            <button onClick={() => this.removeVehicle()}>Delete</button>
                                  
                            <form onSubmit={(e) => this.submitUpdate(e)}>
                                <h3 className="updateTitle">Update Vehicle Info</h3>
                                <label htmlFor='miles'>Update Miles</label>
                                <input type='text' name='miles' id='miles' 
                                    ref={input => this.miles = input} required/>
                                <label htmlFor='spot'>Update Parking Spot</label>
                                <input type='text' name='spot' id='spot'
                                    ref={input => this.spot = input} required/>
                                <button type='submit'>Update</button>
                            </form>
                        </div>
                            <h3 aria-live="assertive">{this.props.signUpError}</h3>
                            
                            <h2 className={this.state.displayDelete?'show':'hidden'} aria-live="assertive">Vehicle Deleted</h2>
                    </div> }
                    <h3 aria-live="assertive">{this.props.message}</h3>
                </section>
            </div>        
        );
    }   
}

const mapStateToProps = (state) => {
    return {
        auto: state.singleVehicle || {},
        vehicles: state.vehicles,
        validVehicleId: state.validVehicleId,
        errorMessage: state.errorMessage || '',
        signUpError: state.signUpError || '',
        message: state.message || '',
        validUser: state.validUser,
        authToken: state.authToken 
    }
};

export default connect(mapStateToProps)(SearchIdForm);
