import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
    const close = (e) => {
        e.preventDefault();
        props.close(e);
    }

    const open = (e) => {
        e.preventDefault();
        props.open(e);
    }

    return <>
    <div onClick={(e) => open(e)} className={props.buttonClass + " modal-button"}>{props.buttonText}</div>
    {props.isActive ? 
        <div className="modal">
        <div className="modal-content">
          <a className="close" onClick={(e) => close(e)}>&times;</a>
          <h2 className="modal-label">{props.label}</h2>
          {props.children}
        </div>
      </div>
         : ''}
    </>
}

Modal.propTypes = {
    buttonClass: PropTypes.string,
    buttonText: PropTypes.string,
    close: PropTypes.func,
    open: PropTypes.func,
    label: PropTypes.string
}

export default Modal;