import React, { Component } from "react";
import AddImage from '../Firebase/ImageUpload'
import { Button, Header, Modal, Image } from 'semantic-ui-react'



const DEFAULT_STATE = {
  firstbame: "",
  surname: "",
  vetClinic: "",
};

export default class AddData extends Component {
  state = {...DEFAULT_STATE};

  onChange = (key, event) => this.setState({ [key]: event.target.value });

  onSubmit = event => {
    event.preventDefault();

    //this.props.doctorAdded({...this.state});
    this.setState(DEFAULT_STATE);
  };

  render() {
    return (
      <Modal trigger={<Button>Dodaj pacjenta</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>Dodaj lekarza</Header>
         
      <div>
        <form className="doctors" onSubmit={this.onSubmit}>
        <br/><p>Imię:</p>
          <input
            value={this.state.firstname}
            onChange={this.onChange.bind(this, "firstname")}
          /><br/><p>Nazwisko:</p>
          <input
            value={this.state.surname}
            onChange={this.onChange.bind(this, "surname")}
         
          /><br/><p>Klinika:</p>
          <input
            value={this.state.vetClinic}
            onChange={this.onChange.bind(this, "vetClinic")}
          />

          <button>Zapisz</button>
        
        </form>
        </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>



    );
  }
}