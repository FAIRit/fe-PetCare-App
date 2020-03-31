import React, { Component } from "react";
import Image from '../Firebase/ImageUpload'


const DEFAULT_STATE = {
  name: "",
  species: "",
  breed: "",
  age:"",
  color:"",
  owner:"",
  idnumber:"",
  img:""
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
          <p>Dodaj pacjenta:</p><br/><p>Imię:</p>
          <input
            value={this.state.name}
            onChange={this.onChange.bind(this, "name")}
          /><br/><p>Gatunek:</p>
          <input
            value={this.state.species}
            onChange={this.onChange.bind(this, "species")}
          /><br/><p>Rasa:</p>
          <input
            value={this.state.breed}
            onChange={this.onChange.bind(this, "breed")}
          /><br/><p>Wiek:</p>
          <input
            value={this.state.age}
            onChange={this.onChange.bind(this, "age")}
          /><br/><p>Kolor:</p>
          <input
            value={this.state.color}
            onChange={this.onChange.bind(this, "color")}
          /><br/><p>Właściciel:</p>
          <input
            value={this.state.owner}
            onChange={this.onChange.bind(this, "owner")}
          /><br/><p>Identyfikator:</p>
          <input
            value={this.state.idnumber}
            onChange={this.onChange.bind(this, "idnumber")}
          /><br/>
<p>Dodaj zdjęcie</p>
<Image value={this.state.img}
            onChange={this.onChange.bind(this, "img")}/>
          <button>Zapisz</button>
        
        </form>
      </div>
















    );
  }
}