
import React, { Component } from "react";
import { Button, Header, Modal, Image } from 'semantic-ui-react'


const DEFAULT_STATE = {
  firstname: "",
  surname: "",
  vetClinic: ""
};

export default class AddData extends Component {
  state = {...DEFAULT_STATE};

  onChange = (key, event) => this.setState({ [key]: event.target.value });

  onSubmit = event => {
    event.preventDefault();

    this.props.doctorAdded({...this.state});
    this.setState(DEFAULT_STATE);
  };

  render() {
    return (
<div>
      <Modal trigger={<Button>Dodaj lekarza</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>Dodaj lekarza</Header>        <form className="doctors" onSubmit={this.onSubmit}>
          <br/><p>Imię:</p>
          <input
            value={this.state.firstname}
            onChange={this.onChange.bind(this, "firstname")}
          /><br/><p>Nazwisko:</p>
          <input
            value={this.state.surname}
            onChange={this.onChange.bind(this, "surname")}
          /><br/><p>Lecznica:</p>
          <input
            value={this.state.vetClinic}
            onChange={this.onChange.bind(this, "vetClinic")}
          /><br/>
          <button>Zapisz</button>
        
        </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    </div>
















    );
  }
}