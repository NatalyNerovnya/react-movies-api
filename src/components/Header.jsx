import React from "react";

import '../styles/Header.css';

const Header = () =>  (
    <div className="header">
        <h2>FIND YOUR MOVIE</h2>
        <input placeholder="What do you want to watch?"/>
        <button>Search</button>
    </div>
);

export default Header;