import React from "react";
import usePreventDefault from './../../utils/hooks/usePreventDefault';

const MovieDetails = (props) => {

    const close = usePreventDefault(() => { props.handleClose(); });

    return <>
        <a className="details-close" onClick={close}>&#8981;</a>
        <div className="details-container">
            <img className="details-image" src={props.imageUrl}/>
            <div className="details-info-container">
                <h2 className="details-label">{props.title}</h2>
                <p className="details-description">{props.description}</p>
            </div>
        </div>
    </>
}

export default MovieDetails;