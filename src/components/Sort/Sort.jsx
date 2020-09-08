import React from 'react';
import PropTypes from 'prop-types';
import usePreventDefault from './../../utils/hooks/usePreventDefault';

const getSortOption = (sortField) => {
    switch(sortField){
        case "year":
            return "RELEASE DATE";
        default:
            return "RELEASE";
    }
};

const Sort = (props) => {
    const sort = usePreventDefault((movies, field, handler) => {
        let sortedMovies = movies.sort((a, b) => {
            if (a[field] > b[field]) {
                return 1;
              }
              if (a[field] < b[field]) {
                return -1;
              }
              return 0;
        });
        handler(sortedMovies);
    });
    
    return <div className="sort-container">
        <span className="sort-label">SORT BY</span>
        <a href="" className="sort-option" onClick={(e) => sort(props.movies, props.sortField, props.handler)}>{getSortOption(props.sortField)}</a>
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