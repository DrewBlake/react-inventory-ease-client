import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from './footer';
import {checkLogIn} from '../actions';
//import './signIn-form.css';


export class SignInForm extends React.Component {
    
    onSubmit(event) {
        event.preventDefault();
        const username = this.username.value;
        const password = this.password.value;
        const user = {
            username,
            password
        };
        
        this.props.dispatch(checkLogIn(user));
       
        this.username.value = '';
        this.password.value = '';
    }
    render() {
        return (
            <main>
                
                <nav role='navigation'>
                    <div className="link">
                        <Link to='/' >Back</Link>
                    </div>
                    <p className="title">Inventory Ease</p>
                </nav>
                <header className="inUpHeader">
                    <h2>Sign In</h2>
                    <h3>Start your search or inventory update.</h3>
                </header>
                    <div>                            
                        <form onSubmit={e => this.onSubmit(e)}>
                            
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name='username' id='username' 
                                ref={input => this.username = input} required />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' id='password' 
                                ref={input => this.password = input}required />
                            </div>
                            
                            <button type='submit'>Sign In</button>                
                        </form>
                        <h3>{this.props.message}</h3>
                    </div>
                  
                <Footer /> 
            </main>       
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message || '',
        validUser: state.validUser,
        user: state.user
    }
};

export default connect(mapStateToProps)(SignInForm);
