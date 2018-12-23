import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import SearchIdForm from './searchId-form';
import AddInventoryForm from './addInventory-form';
import SearchAll from './searchAll';
import Footer from './footer';
import {logOut, getAllVehicles} from '../actions';

export class HomePage extends React.Component {
    displayAll() {
        this.props.dispatch(getAllVehicles());
    }

    
    render() { 
        if (this.props.authToken === null) {
            return <Redirect to='/' />;           
        } 
        return(
            <div>
                <nav role='navigation'>
                    <div className="link">
                        <Link to='/' onClick={()=>this.dispatch(logOut())}>Log Out</Link>       
                    </div>
                    <p className="title">Inventory Ease</p>
                </nav>
                <SearchAll displayAll={()=>this.displayAll()} 
                    isShow={this.props.isShow} 
                    autos={this.props.vehicles} />
                <SearchIdForm />
                <AddInventoryForm />
                <Footer />    
            </div>       
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isShow: state.isShow,
        vehicles: state.vehicles
    }
};

export default connect(mapStateToProps)(HomePage);