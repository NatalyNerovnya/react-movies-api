import React from 'react';
import PropTypes from 'prop-types';

import "../../styles/MoviesCounter.css"

const MoviesCounter = (props) => {
    return <div className="counter-container">
      <span className="count">{props.count}</span>
      <span> movies found</span>
    </div>
}

MoviesCounter.propTypes = {
  count: PropTypes.number
}

MoviesCounter.defaultProps = {
    count: 0
}

export default MoviesCounter;