import React, { useState, useCallback } from "react";
import Modal from "../../containers/Modal";

const AddForm = () => {
    const [isActive, setIsActive] = useState(false);
    
    const close = useCallback(e => {
        e.preventDefault();
        setIsActive(false);
    }, []);

    const open = useCallback(e => {
        e.preventDefault();
        setIsActive(true);
    }, []);

    return <Modal
        buttonClass="addmovie"
        buttonText="+ ADD MOVIE"
        isActive={isActive}
        close={close}
        open={open}
        label="ADD MOVIE"> 
    
        <span className="label">TITLE</span>
        <input className="input" />

        <span className="label">RELEASE DATE</span>
        <input className="input" type="month" />

        <span className="label">MOVIE URL</span>
        <input className="input" />

        <span className="label">OVERVIEW</span>
        <input className="input" />

        <span className="label">RUNTIME</span>
        <input className="input" />

        <div className="buttons">
            <div className="reset" onClick={(e) => close(e)}>RESET</div>
            <div className="submit" onClick={(e) => close(e)}>SUBMIT</div>
        </div>
    </Modal> 
}

export default AddForm;