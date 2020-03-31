import React, { Component} from "react";
import Image from '../Firebase/ImageUpload'



const DEFAULT_STATE = {
  date: "",
  type: "",
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
          <p>Dodaj dokument:</p><br/><p>Data:</p>
          <input
            value={this.state.date}
            onChange={this.onChange.bind(this, "date")}
          /><br/><p>Rodzaj dokumentu:</p>
          <input
            value={this.state.type}
            onChange={this.onChange.bind(this, "type")}
          /><br/>
<p>Dodaj plik</p>
<Image value={this.state.img}
            onChange={this.onChange.bind(this, "img")}/>
          <button>Zapisz</button>
        
        </form>
      </div>



    );
  }
}