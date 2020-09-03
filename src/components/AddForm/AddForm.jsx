import React from "react";
import Modal from "../../containers/Modal";

class AddForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {isActive: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    
    close(e){
        e.preventDefault();
        this.setState({isActive: false})
    }

    open(e){
        e.preventDefault();
        this.setState({isActive: true})
    }

    render(){
        return <Modal
            buttonClass="addmovie"
            buttonText="+ ADD MOVIE"
            isActive={this.state.isActive}
            close={this.close}
            open={this.open}
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
            <div className="reset" onClick={(e) => this.close(e)}>RESET</div>
            <div className="submit" onClick={(e) => this.close(e)}>SUBMIT</div>
        </div>
    </Modal> 
    }
}

export default AddForm;