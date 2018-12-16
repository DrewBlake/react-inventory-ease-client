import React from 'react';
import {connect} from 'react-redux';
import {addVehicle} from '../actions';
//import {Link} from 'react-router-dom';
//import './signIn-form.css';


export class AddInventoryForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const year = this.year.value;
        const make = this.make.value;
        const model = this.model.value;
        const mileage = this.mileage.value;
        const parkingSpace = this.location.value;
       // const vehicleId = this.id.value;
        const newVehicle = this.isNew.value;
        const vehicleInfo = {
           // vehicleId,
            year,
            make,
            model,
            mileage,
            parkingSpace,
            newVehicle
        }

        this.props.dispatch(addVehicle(vehicleInfo));

        this.year.value = '';
        this.make.value = '';
        this.model.value = '';
        this.mileage.value = '';
        this.location.value = '';
        //this.id.value = '';
        this.isNew.value = '';
        
    }
    render() {
        return (
            <section>
                <header>
                <h2>Add Inventory</h2>
                <h3>For recently purchased or traded in vehicles that
                    need to be added to dealership inventory
                </h3>
                </header>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div>
                        <label htmlFor="year">Year</label>
                        <input type="number" name='year' id='year' 
                            ref={input => this.year = input} required />
                    </div>
                    <div>
                        <label htmlFor="make">Make</label>
                        <input type="text" name='make' id='make' placeholder='Honda' 
                            ref={input => this.make = input} required />
                    </div>
                    <div>
                        <label htmlFor="model">Model</label>
                        <input type="text" name='model' id='model' placeholder='Accord'
                            ref={input => this.model = input} required />
                    </div>
                    <div>
                        <label htmlFor="mileage">Mileage</label>
                        <input type="text" name='mileage' id='mileage' 
                            ref={input => this.mileage = input} required />
                    </div>
                    
                    <div>
                        <label htmlFor="location">Parking space</label>
                        <input type="text" name='location' id='location' 
                            ref={input => this.location = input} required />
                    </div>
                    <div>
                        <label htmlFor="location">Is vehicle new?</label>
                        <input type="boolean" name='isNew' id='isNew' placeholder='true/false'
                            ref={input => this.isNew = input} required />
                    </div>
                    <button type='submit'>Enter</button>
                </form>
                <h3>{this.props.message}</h3>
                <h3>{this.props.successMessage}</h3>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isShow: state.isShow,
        message: state.message || '',
        successMessage: state.successMessage || '',
        vehicles: state.vehicles
    }
};

export default connect(mapStateToProps)(AddInventoryForm);