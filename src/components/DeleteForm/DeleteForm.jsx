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
            buttonClass=""
            buttonText="DELETE"
            isActive={this.state.isActive}
            close={this.close}
            open={this.open}
            label="DELETE MOVIE"> 
        
        <p>Are you sure you want to delete this movie?</p>
        <div className="buttons">
            <div className="submit" onClick={(e) => this.close(e)}>CONFIRM</div>
        </div>
    </Modal> 
    }
}

export default AddForm;