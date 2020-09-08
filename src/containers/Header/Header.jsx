import React, { useState, useCallback } from "react";
import Search from "../../components/Search";
import MovieDetails from "../../components/MovieDetails";

const Header = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const handleClose = useCallback(() => {
        setIsSearchActive(true);
    });

    return <div className="header">
        {isSearchActive ? <Search /> : <MovieDetails handleClose={handleClose}/>}
    </div>
};

export default Header;