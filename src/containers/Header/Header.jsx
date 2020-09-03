import React from "react";
import AddForm from './../../components/AddForm';

const Header = () =>  (
    <div className="header">
        <AddForm />
        <div className="search-input-from">
        <h2 className="search-lable">FIND YOUR MOVIE</h2>
        <div className="search-input">
            <input placeholder='What do you want to watch?'/>
        </div>
        <div className="search-button">SEARCH</div>
    </div>
    </div>
);

export default Header;