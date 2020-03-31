import React, { Component } from "react";
import { Button, Header, Modal, Image } from 'semantic-ui-react'



const DEFAULT_STATE = {
  admissionDate: "",
  dischargeDate: "",
  vet: "",
  doctor: "",
  patientsCondition: "",
  diagnosis: "",
  recommendations: ""
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
          <Modal trigger={<Button>Dodaj dane</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>Dodaj dane</Header>
        <form className="doctors" onSubmit={this.onSubmit}>
          <p>Dodaj datę przyjęcia:</p>
          <input
            value={this.state.admissionDate}
            onChange={this.onChange.bind(this, "admissionDate")}
          />          <p>Dodaj datę wypisu:</p>

          <input
            value={this.state.dischargeDate}
            onChange={this.onChange.bind(this, "dischargeDate")}
          />          <p>Dodaj klinikę:</p>

          <input
            value={this.state.vet}
            onChange={this.onChange.bind(this, "vet")}
          />          <p>Dodaj informację o pacjencie:</p>
          <p>Dodaj lekarza:</p>

          <input
            value={this.state.doctor}
            onChange={this.onChange.bind(this, "doctor")}
          />          <p>Dodaj informację o pacjencie:</p>

          <input
            value={this.state.patientsCondition}
            onChange={this.onChange.bind(this, "patientsCondition")}
          />          <p>Dodaj diagnozę:</p>

          <input
            value={this.state.diagnosis}
            onChange={this.onChange.bind(this, "diagnosis")}
          />          <p>Dodaj rekomendacje:</p>

          <input
            value={this.state.recommendations}
            onChange={this.onChange.bind(this, "recommendations")}
          /><br />
          <button>Zapisz</button>

        </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    </div>
















    );
  }
}