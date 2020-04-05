import React, { Component } from "react";
import { Button, Header, Modal, Image } from 'semantic-ui-react'
//import AddImage from '../Firebase/ImageUpload'
//<AddImage>



const DEFAULT_STATE = {
  date: "",
  type: "",
  img: ""
}


export default class AddData extends Component {
  state = { ...DEFAULT_STATE };

  onChange = (key, event) => this.setState({ [key]: event.target.value });

  onSubmit = event => {
    event.preventDefault();

    //this.props.doctorAdded({ ...this.state });
    this.setState(DEFAULT_STATE);
  };

  render() {
    return (
      <div>
      <Modal trigger={<Button>Dodaj dokument</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>Dodaj dokument</Header>
        <form className="doctors" onSubmit={this.onSubmit}>
         <br/><p>Data:</p>
          <input
            value={this.state.date}
            onChange={this.onChange.bind(this, "date")}
          /><br/><p>Rodzaj dokumentu:</p>
          <input
            value={this.state.type}
            onChange={this.onChange.bind(this, "type")}
          /><br/>
<p>Dodaj plik</p>

          <button>Zapisz</button>
        
        </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    </div>



    );
  }
}