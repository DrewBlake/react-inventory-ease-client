import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SearchIdForm from './searchId-form';
import AddInventoryForm from './addInventory-form';
import SearchAll from './searchAll';
import Footer from './footer';
import {logOut, getAllVehicles} from '../actions';

//import NavBar from './nav-bar';

export class HomePage extends React.Component {
    /*constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }*/

    displayAll() {
        this.props.dispatch(getAllVehicles());
      /*  this.setState({
            isShow: true
        });*/
    }

    
    render() { 

        return(
            <div>
                <nav role='navigation'>
                    <Link to='/' onClick={()=>this.dispatch(logOut())}>Log Out</Link>       
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