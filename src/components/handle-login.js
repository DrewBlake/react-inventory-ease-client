import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export function HandleLogIn(props) {
	console.log(props.validUser);
	console.log('HandleLogIn');
	if (props.validUser) {
		return <Redirect to='/home' />;	
	} 
	return null;
}

const mapStateToProps = state => ({
	validUser: state.validUser
});

export default connect(mapStateToProps)(HandleLogIn);