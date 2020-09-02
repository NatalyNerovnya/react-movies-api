import React from "react";
import MovieCard from './MovieCard/';

const Movies = (props) => {
    return <div className="movies">
        {props.movies.map(movie => <MovieCard key={movie.id} {...movie}/>)}
    </div>
};

export default Movies;