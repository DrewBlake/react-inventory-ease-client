import React from 'react';
import {connect} from 'react-redux';
import {deleteVehicle, updateVehicle, getVehicleId} from '../actions';


export class SearchIdForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            auto: [],      
            isActive: false,
            displayDelete: false,
            id: ''
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
        const value = this.id.value;
        console.log(value);
        const auto = this.props.vehicles.filter((auto) => {
            return auto.id === value;
        });
        this.setState({
            auto: auto[0]?auto[0]:null,
            displayDelete: false,
            id: value
        });
        console.log(auto[0]);
        this.id.value = '';
    }

    removeVehicle() {
        console.log('Vehicle deleted');   
        this.props.dispatch(deleteVehicle(this.state.id));
        this.setState({
            isActive: false,
            auto: [],
            displayDelete: true,
            id: ''
        });
        console.log(this.state);
    }

    submitUpdate(event) {
        event.preventDefault();
        const mileage = this.miles.value;
        const parkingSpace = this.spot.value;
        this.props.dispatch(updateVehicle(this.state.id, mileage, parkingSpace));
        this.miles.value = '';
        this.spot.value = '';
    }
     

    render() { 
          
        return (
            <div>
                <header>
                    <h2>Search By Vehicle ID</h2>
                    <h3>Gives information for specific vehicle selected</h3>
                </header>
                <form onSubmit={(e) => this.onSubmit(e)}>   
                    <label htmlFor="id">Enter ID</label>
                    <input type="text" name='id' id='id' 
                        ref={input => this.id = input} required />
                    <button type='submit'>Search</button>
                </form>

                {!(this.state.auto)&&<h2>Enter valid Id</h2>}
                {this.state.auto&&
                <div>

                    <h2>{this.state.auto.year} {this.state.auto.make} {this.state.auto.model} {this.state.auto.mileage}</h2>
                        <div className={this.state.isActive?'show':'hidden'}>
                            <button onClick={() => this.removeVehicle()}>Delete vehicle</button>
                            
                            <h2>Update Vehicle Info</h2>
                            <form onSubmit={(e) => this.submitUpdate(e)}>
                                <label htmlFor='miles'>Update Miles</label>
                                <input type='text' name='miles' id='miles' 
                                    ref={input => this.miles = input} />
                                <label htmlFor='spot'>Update Parking Spot</label>
                                <input type='text' name='spot' id='spot'
                                    ref={input => this.spot = input} />
                                <button type='submit'>Update</button>
                            </form>
                        </div>
                        <h2 className={this.state.displayDelete?'show':'hidden'}>Vehicle Deleted</h2>
                </div> }

            </div>        
        );
    }   
}

const mapStateToProps = (state) => {
    return {
        
        vehicles: state.vehicles
    }
};

export default connect(mapStateToProps)(SearchIdForm);
