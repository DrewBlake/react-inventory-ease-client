import React from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';

export function Footer(props) {
    const contactInfo = <a href=''>Contact Info</a>
    return (
        <footer role="contentinfo">
        	Contact us at: dealerInfo@email.com (777)-777-7777
        </footer>
    );
}

export default connect()(Footer);