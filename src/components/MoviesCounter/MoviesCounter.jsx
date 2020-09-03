import React from 'react';
import PropTypes from 'prop-types';

const MoviesCounter = (props) => {
    return <div className="counter-container">
      <span className="count">{props.movies ? props.movies.length : "No"}</span>
      <span> movies found</span>
    </div>
}

MoviesCounter.propTypes = {
  movies: PropTypes.array
}

export default MoviesCounter;