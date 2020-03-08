import React, { Component } from "react";

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
        <form className="doctors" onSubmit={this.onSubmit}>
          <p>Dodaj lekarza:</p>
          <input
            value={this.state.firstname}
            onChange={this.onChange.bind(this, "firstname")}
          />
          <input
            value={this.state.surname}
            onChange={this.onChange.bind(this, "surname")}
          />
          <input
            value={this.state.vetClinic}
            onChange={this.onChange.bind(this, "vetClinic")}
          />
          <button>Zapisz</button>
        </form>
      </div>
    );
  }
}
