
import React, { Component } from 'react';
import './App.css';
import fire from './components/Firebase/firebase';
import Home from './Home';
import Login from './components/LoginPanel/Login';
import Demo from './components/LoginPanel/Demo';


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Home />
        ) :
          ( <Login />|| <Demo />
         
          )}
        
      </div>
    );
  }
}

export default App;