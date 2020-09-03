import React from 'react';
import PropTypes from 'prop-types';

export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {isActive: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

    }

    close(e){
        e.preventDefault();
        this.setState({isActive: false});
        this.props.close(e);
    }

    open(e){
        e.preventDefault();
        this.setState({isActive: true});
        this.props.open(e);
    }

    render(){
    return <>
    <div onClick={(e) => this.open(e)} className={this.props.buttonClass + " modal-button"}>{this.props.buttonText}</div>
    {this.props.isActive ? 
        <div className="modal">
        <div className="modal-content">
          <a className="close" onClick={(e) => this.close(e)}>&times;</a>
          <h2 className="modal-label">{this.props.label}</h2>
          {this.props.children}
        </div>
      </div>
         : ''}
    </>
    }
}

Modal.propTypes = {
    buttonClass: PropTypes.string,
    buttonText: PropTypes.string,
    close: PropTypes.func,
    open: PropTypes.func,
    label: PropTypes.string
}