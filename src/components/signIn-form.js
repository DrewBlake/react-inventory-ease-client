import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from './footer';
import {checkLogIn} from '../actions';
//import './signIn-form.css';


export class SignInForm extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            errorMsg: false
        }
    }*/

    onSubmit(event) {
        event.preventDefault();
        const username = this.username.value;
        const password = this.password.value;
        const user = {
            username,
            password
        };
        
        this.props.dispatch(checkLogIn(user));
        /*if (!this.validUser) {
                this.setState({
                errorMsg: true
            });
        }*/
        
        this.username.value = '';
        this.password.value = '';
    }
    render() {
        return (
            <div>
                
                <nav role='navigation'>
                    <Link to='/' >Back</Link>
                </nav>
                    <section>
                        <header>
                            <h1>Sign In</h1>
                            <h3>Start your search or inventory update.</h3>
                        </header>
                                  
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
                        <h3>{this.props.errorMessage}</h3>
                    </section>
                  
                <Footer /> 
            </div>       
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        errorMessage: state.errorMessage || '',
        validUser: state.validUser,
        user: state.user
    }
};

export default connect(mapStateToProps)(SignInForm);
