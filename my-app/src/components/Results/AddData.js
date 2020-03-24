import React, { Component } from "react";


const DEFAULT_STATE = {
  id: "",
  date: "",
  name: "",
  type: "",
  result: "",
  unit: "",
  referenceUnit: "",
  other: ""
};


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
        <form className="doctors" onSubmit={this.onSubmit}>
          <p>Dodaj datę badania:</p>
          <input
            value={this.state.date}
            onChange={this.onChange.bind(this, "date")}
          />          <p>Dodaj nazwę:</p>

          <input
            value={this.state.name}
            onChange={this.onChange.bind(this, "name")}
          />          <p>Dodaj rodzaj:</p>

          <input
            value={this.state.type}
            onChange={this.onChange.bind(this, "type")}
          />          <p>Dodaj wynik:</p>

          <input
            value={this.state.result}
            onChange={this.onChange.bind(this, "result")}
          />          <p>Dodaj jednostkę:</p>

          <input
            value={this.state.unit}
            onChange={this.onChange.bind(this, "unit")}
          />          <p>Dodaj jednostkę referencyjną:</p>

          <input
            value={this.state.referenceUnit}
            onChange={this.onChange.bind(this, "referenceUnit")}
          />          <p>Dodatkowe informacje:</p>
            <input
            value={this.state.other}
            onChange={this.onChange.bind(this, "other")}
          />       

  <br />
          <button>Zapisz</button>

        </form>
      </div>
















    );
  }
}