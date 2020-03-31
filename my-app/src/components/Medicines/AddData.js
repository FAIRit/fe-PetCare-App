import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'




const DEFAULT_STATE = {
  id: "",
  name: "",
  type: "",
  dosage: "",
  date: "",
  doctor: "",
  other: "",
}


export default class AddData extends Component {
  state = { ...DEFAULT_STATE };

  onChange = (key, event) => this.setState({ [key]: event.target.value });

  onSubmit = event => {
    event.preventDefault();

    this.props.doctorAdded({ ...this.state });
    this.setState(DEFAULT_STATE);
  };

  render() {
    return (
      <div>

      <Modal trigger={<Button>Dodaj lek</Button>}>
      <Modal.Content>
       
        <Modal.Description>
          <Header>Dodaj lek</Header>      
        <form className="doctors" onSubmit={this.onSubmit}>
          <p>Dodaj lek:</p>
          <input
            value={this.state.name}
            onChange={this.onChange.bind(this, "name")}
          />          <p>Dodaj rodzaj leku:</p>

          <input
            value={this.state.type}
            onChange={this.onChange.bind(this, "type")}
          />          <p>Dodaj dawkowanie:</p>

          <input
            value={this.state.dosage}
            onChange={this.onChange.bind(this, "dosage")}
          />
          <p>Dodaj datę rozpoczęcia:</p>
          <input
            value={this.state.data}
            onChange={this.onChange.bind(this, "data")}
          />
          <p>Dodaj informację o lekarzu:</p>

          <input
            value={this.state.doctor}
            onChange={this.onChange.bind(this, "doctor")}
          />          <p>Dodatkowe informacje:</p>

          <input
            value={this.state.other}
            onChange={this.onChange.bind(this, "other")}
          />
          <br />
          <button>Zapisz</button>
        </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    </div>















    );
  }
}