import React, { useState, useCallback } from "react";
import Search from "../../components/Search";
import MovieDetails from "../../components/MovieDetails";

const Header = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const handleClose = useCallback(() => {
        setIsSearchActive(true);
    });

    return <div className="header">
        {isSearchActive ? 
            <Search /> :
            <MovieDetails
                handleClose={handleClose}
                title="Film title"
                imageUrl="https://upload.wikimedia.org/wikipedia/ru/5/59/Disenchantment.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec lacus convallis, imperdiet mi sit amet, faucibus eros. Nulla facilisi. Duis tristique sed sem at lacinia. Etiam ex augue, gravida eget sapien id, fringilla varius odio. Sed metus ex, aliquam vehicula mollis a, iaculis id metus. Pellentesque in fermentum ipsum, nec maximus ipsum. Suspendisse potenti. Etiam cursus faucibus nunc, id accumsan nisl interdum ut. Donec pharetra est erat, vel tempor ex gravida a. Donec eget cursus erat. Vivamus sit amet leo non risus blandit mattis at eu nibh. Praesent eget pretium nulla. Cras non eleifend lectus. Pellentesque commodo lectus est, sit amet pharetra neque congue et." />}
    </div>
};

export default Header;