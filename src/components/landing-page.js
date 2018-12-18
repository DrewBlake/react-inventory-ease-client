import React from 'react';
//import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from './footer';
import './landing-page.css';

export default function LandingPage() {
    return(
        <div>
            <nav role="navigation">
                <div className="link">
                    <Link to='SignIn'>Sign-in </Link>
                    <Link to='SignUp'> Sign-up</Link>
                </div>
                <p className="title">Inventory Ease</p>
            </nav>
            <main role="main">
                <header role="banner">
                    <h2 className="landingTitle">Streamline your auto dealerships inventory.</h2>
                </header>
                <section className="description">
                    <h2>-What you can do-</h2>                   
                    <h3>View entire dealership inventory</h3>
                    <h3>Search inventory by vehicle ID</h3>
                    <h3>Add and delete vehicles from inventory</h3>
                    <h3>Update vehicle info</h3>                   
                    <h2>Sign up to get started</h2>
                    <h3>Increase sales productivity and customer experience.</h3>
                </section>
            </main>
            <Footer />
        </div>
    );
}