import React from "react";
import MovieCard from './MovieCard/';
import MoviesCounter from "./MoviesCounter";

const Movies = () => {
    let movies = [{
        title: "firstTitle",
        genres: ["genre 1", "genre 2"],
        year: "2004",
        id: 1
    }, {
        genres: ["any genre"],
        year: "2004",
        imageUrl: "https://i.pinimg.com/originals/f6/e9/6e/f6e96e7bcf7aee8f5619f215dc02f3f5.jpg",
        id: 2
    }, {
        genres: ["any genre", "asdasdasd", "asdasd"],
        imageUrl: "https://i.pinimg.com/originals/f6/e9/6e/f6e96e7bcf7aee8f5619f215dc02f3f5.jpg",
        id: 3
    }
];

    return <div className="movies">
            <MoviesCounter count={movies.length} />
            {movies.map(movie => <MovieCard key={movie.id} {...movie}/>)}
        </div>
};

export default Movies;