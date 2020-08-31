import React from 'react';

const Footer = () => {
    return <h3>We are working in {process.env.NODE_ENV !== 'production'? "dev" : "prod"} mode</h3>
}

export default Footer;