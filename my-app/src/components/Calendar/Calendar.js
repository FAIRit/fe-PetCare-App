import React, { Component } from 'react';
import List from './List';
import DatePicker from './DatePicker'

export default class addData extends Component {
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
          <DatePicker
  selected={this.state.date}
  onSelect={this.handleSelect} //when day is clicked
  onChange={this.handleChange} //only when value has changed
/>
<br/>
        <form className="App" onSubmit={this.onSubmit}>
        <List items={this.state.items} />

          <input value={this.state.term} onChange={this.onChange} placeholder="dodaj zadanie" />
          <button>Zapisz</button>
        </form>
      
      </div>
    );
  }
}