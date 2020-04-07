import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import fire from '../Firebase/firebase'
import Demo from './Demo';


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
        <form>
          <div >
            <label>Adres e-mail</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" placeholder="admin@admin.pl" />
          </div>
          <div className="form-group">
            <label>Hasło</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="haslo123" />
          </div>
          <Button content='Zaloguj'type="submit" onClick={this.login}/>
          <Button content='Zarejestruj' onClick={this.signup} style={{marginLeft: '25px'}}/>
          <Demo/><br/>
          <p>Tylko zalogowani użytkownicy mogą wprowadzać i edytować dane. <br/>
            Załóż konto, aby móc korzystać ze wszystkich funkcjonalności.
          </p>
        </form>

      </div>
    );
  }
}
export default Login; 