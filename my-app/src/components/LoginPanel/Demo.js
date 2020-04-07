import React from 'react';
import Home from '../../Home'
import { Button } from 'semantic-ui-react'



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
        <Button content ="Wersja demo" onClick={() => this.setState({ navigate: true })}>
        </Button>
      </div>
    )
  }
}

export default Demo;