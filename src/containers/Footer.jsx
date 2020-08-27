import React from 'react';

import "../styles/Footer.css";

const Footer = () => {
    return <h3>We are working in {process.env.NODE_ENV !== 'production'? "dev" : "prod"} mode</h3>
}

export default Footer;