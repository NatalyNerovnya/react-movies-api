import React, { useCallback } from "react";

const MovieDetails = (props) => {
    
    const close = useCallback((e) => {
        e.preventDefault();
        props.handleClose();
    }, []);

    return <>
        <a className="details-close" onClick={close}>&#8981;</a>
    </>
}

export default MovieDetails;