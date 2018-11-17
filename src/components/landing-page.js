import React from 'react';
//import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from './footer';

export default function LandingPage() {
    return(
        <div>
            <nav role="navigation">
                <Link to='SignIn'>Sign-in </Link>
                <Link to='SignUp'> Sign-up</Link>
            </nav>
            <main role="main">
                <header role="banner">
                    <h1>Inventory Ease</h1>
                    <h3>Streamline your auto dealerships vehicle inventory.</h3>
                </header>
                <section className="description">
                    <h3>-What you can do-</h3>
                    
                    <p>View entire dealership inventory</p>
                    <p>Search inventory by vehicle ID</p>
                    <p>Add and delete vehicles from inventory</p>
                    <p>Update vehicle info</p>
                    <p>Get vehicle location on sales lot</p>
                    
                </section>
                <section>
                    <h3>Sign up to get started</h3>
                    <p>Increase sales productivity and customer experience.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
}