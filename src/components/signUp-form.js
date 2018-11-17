import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from './footer';
import {signUp} from '../actions';
import './signUp-form.css';


export class SignUpFormPage extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const username = this.userName.value;
        const password = this.password.value;
        this.props.dispatch(signUp(firstName, lastName, username, password));
        this.firstName.value = '';
        this.lastName.value = '';
        this.userName.value = '';
        this.password.value = '';
    }
    render() {
        return (
           <main role="main">
                <nav role='navigation'>
                    <Link to='/'>Back</Link>
                </nav>
                <header role="banner">
                    <h1>Sign Up</h1>
                    <h3>Get access to all your inventory needs.</h3>
                </header>
                
                    
                    <form onSubmit = {(e) => this.onSubmit(e)}>
                        <div>
                            <label htmlFor="first-name">First name</label>
                            <input placeholder='First Name' type="text" name='first-name' id='first-name' 
                               ref={input => (this.firstName = input)} />
                        </div>
                        <div>
                            <label htmlFor="last-name">Last name</label>
                            <input type="text" name='last-name' id='last-name' placeholder='Last Name' 
                                ref={input => (this.lastName = input)} />
                        </div>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' id='username' 
                                ref={input => (this.userName = input)} required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password'  
                                ref={input => (this.password = input)} required />
                        </div>
                        <button type='submit'>Sign Up</button>
                    </form>
                    <Footer />
            </main>
        );
    }
}

export default connect()(SignUpFormPage);