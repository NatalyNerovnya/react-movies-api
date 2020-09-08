import React, { useState } from "react";
import Modal from "../../containers/Modal";
import usePreventDefault from './../../utils/hooks/usePreventDefault';

const EditForm = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [movie, setMovie] = useState(props.movie);
    
    const close = usePreventDefault(() => { setIsActive(false) });

    const open = usePreventDefault(() => { setIsActive(true) });

    return <Modal
            buttonClass=""
            buttonText="EDIT"
            isActive={isActive}
            close={close}
            open={open}
            label="EDIT MOVIE"> 
        
        <span className="label">TITLE</span>
        <input className="input" value={movie.title}/>

        <span className="label">RELEASE DATE</span>
        <input className="input" value={movie.year} />

        <span className="label">MOVIE URL</span>
        <input className="input" value={movie.imageUrl}/>

        <span className="label">OVERVIEW</span>
        <input className="input" />

        <span className="label">RUNTIME</span>
        <input className="input" />

        <div className="buttons">
            <div className="reset" onClick={(e) => close(e)}>RESET</div>
            <div className="submit" onClick={(e) => close(e)}>SAVE</div>
        </div>
    </Modal> 
}

export default EditForm;