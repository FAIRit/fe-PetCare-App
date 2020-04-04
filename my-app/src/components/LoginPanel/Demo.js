import React from 'react';
import Home from '../../Home'


class Demo extends React.Component {
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
          Wersja demo
        </button>
      </div>
    )
  }
}

export default Demo;