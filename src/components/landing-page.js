import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';

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
            
                <header role="banner">
                    <h2 className="landingTitle">Streamline your auto dealerships inventory</h2>
                </header>
                <section className="info">
                    <h2>-What you can do-</h2>                   
                    <h3>View entire dealership inventory</h3>
                    <h3>Search inventory by vehicle ID</h3>
                    <h3>Add and delete vehicles from inventory</h3>
                    <h3>Update vehicle info</h3> 
                    <h2>-Sign up to get started!-</h2>
                    <h3>Increase sales productivity and customer experience.</h3>
                </section>
            <div className="copyright" aria-live="assertive">Copyright Andrew Blake 2018</div>
            <Footer />
        </div>
    );
}