import React, { Component } from 'react';


export default class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="medicines" onSubmit={this.onSubmit}>
        <p>Dodaj dane:</p>
          <input value={this.state.term} onChange={this.onChange} />
          <button type="submit">Zapisz</button>        </form>
      </div>
    );
  }
}