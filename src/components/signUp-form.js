import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


export default class SignupForm extends React.Component {
    render() {
        return (
            <form >
                <label for="first-name">First name</label>
                <input placeholder='First Name' type="text" 
                       name='first-name' id='first-name' 
                       ref={input => (this.input = input)}
                       required />     
                <button >
                    Sign Up
                </button>
            </form>
        );
    }
}

//export default(SignupForm);