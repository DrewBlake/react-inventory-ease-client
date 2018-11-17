import React from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';

export function Footer(props) {
    const contactInfo = <a href=''>Contact Info</a>
    return (
        <footer role="contentinfo"><a href="">Contact Info</a></footer>
    );
}

export default connect()(Footer);