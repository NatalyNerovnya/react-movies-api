import React from "react";
import PropTypes from 'prop-types';

const MovieCard = (props) => {
    return <div className="card">
        <img className="image" src={props.imageUrl}/>
        <span className="title">{props.title}</span>
        <span className="year">{props.year || "Unknown"}</span>
        <p>{props.genres.join(', ')}</p>
    </div>
};

MovieCard.defaultProps = {
    title: "Unknown",
    imageUrl: "https://healthchecker.net/images/no-image.png"
}

MovieCard.propTypes = {
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number,
    imageUrl: PropTypes.string,
    id: PropTypes.number
  }
  

export default MovieCard;