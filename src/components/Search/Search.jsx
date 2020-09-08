import React from "react";
import AddForm from './../../components/AddForm';

const Search = () =>  (
    <>
    <AddForm />
     <div className="search-input-from">
        <h2 className="search-lable">FIND YOUR MOVIE</h2>
        <div className="search-input">
            <input placeholder='What do you want to watch?'/>
        </div>
        <div className="search-button">SEARCH</div>
    </div>
    </>
);

export default Search;