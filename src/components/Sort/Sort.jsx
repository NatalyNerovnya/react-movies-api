import React from 'react';
import PropTypes from 'prop-types';

const getSortOption = (sortField) => {
    switch(sortField){
        case "year":
            return "RELEASE DATE";
        default:
            return "RELEASE";
    }
};

const sort = (movies, field, handler, e) => {
    debugger;
    let sortedMovies = movies.sort((a, b) => {
        if (a[field] > b[field]) {
            return 1;
          }
          if (a[field] < b[field]) {
            return -1;
          }
          return 0;
    });
    e.preventDefault();
    handler(sortedMovies);
}

const Sort = (props) => {
    return <div className="sort-container">
        <span className="sort-label">SORT BY</span>
        <a href="" className="sort-option" onClick={(e) => sort(props.movies, props.sortField, props.handler, e)}>{getSortOption(props.sortField)}</a>
    </div>
};

Sort.propTypes = {
    movies: PropTypes.array,
    sortField: PropTypes.string,
    handler: PropTypes.func
  };

Sort.defaultProps = {
    sortField: "year"
}

export default Sort;