import { Redirect } from 'react-router'
import React, { Component } from 'react';
import Home from '../../Home'




class FooBar extends React.Component {
  state = {
    navigate: false
  }

  render() {
    const { navigate } = this.state

    if (navigate) {
      return <Home></Home>
    }

    return (
      <div>
        <button onClick={() => this.setState({ navigate: true })}>
          Home
        </button>
      </div>
    )
  }
}

export default FooBar;