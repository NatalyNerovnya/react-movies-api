import React from "react";
import PropTypes from 'prop-types';
import DeleteForm from "../../DeleteForm";
import EditForm from "../../EditForm";

const MovieCard = (props) => {
    return <div className="card">
        <div className="image-container">
            <img className="image" src={props.imageUrl}/>
            <div className="image-button">&#8942;</div>
            <div className="image-menu">
                <EditForm movie={{...props}} />
                <DeleteForm />
            </div>
        </div>        
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