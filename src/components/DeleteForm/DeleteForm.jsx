import React, { useState } from "react";
import Modal from "../../containers/Modal";
import usePreventDefault from './../../utils/hooks/usePreventDefault';

const DeleteForm = () => {
    const [isActive, setIsActive] = useState(false);
    
    const close = usePreventDefault(() => { setIsActive(false) });

    const open = usePreventDefault(() => { setIsActive(true) });

    return <Modal
            buttonClass=""
            buttonText="DELETE"
            isActive={isActive}
            close={close}
            open={open}
            label="DELETE MOVIE"> 
        
        <p>Are you sure you want to delete this movie?</p>
        <div className="buttons">
            <div className="submit" onClick={(e) => close(e)}>CONFIRM</div>
        </div>
    </Modal> 
}

export default DeleteForm;