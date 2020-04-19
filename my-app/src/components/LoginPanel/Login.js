import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react'
import fire from '../Firebase/firebase'
import { Translation } from 'react-i18next';
import i18next from 'i18next';
import En from '../Languages/Flags/en'
import Pl from '../Languages/Flags/pl'


function handleClick(lang) {
  i18next.changeLanguage(lang)
}

const handleClickPL = e => handleClick('pl');
const handleClickEN = e => handleClick('en');

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
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
     alert("Błędne hasło lub nazwa użytkownika")
    });
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch((error) => {
        alert("Coś poszło nie tak...");
      })
  }

  render() {
    return (      <div>
   
      <div className="loginpanel">   <div className="language">  <Button onClick={handleClickPL}><Pl /></Button>
      <Button onClick={handleClickEN}><En /></Button></div>  <form className="loginform">
                    <div className="login-data">
            
            <Translation>
              {(t) => <label>{t('Adres e-mail.62')}: </label>
              }</Translation>

            <Input size='mini' value={this.state.email} onChange={this.handleChange} type="email" name="email" className="loginInput" placeholder="admin@admin.pl"/>
          </div>
          <div className="login-data">
            <Translation>
              {(t) => <label>{t('Hasło.61')}:  </label>}
            </Translation>

            <Input size='mini' value={this.state.password} onChange={this.handleChange} type="password" name="password"  className="loginInput" placeholder="haslo123" />
          </div>

          <Translation>
            {(t) => <Button type="submit" onClick={this.login}> {t('Zaloguj.63')}</Button>}</Translation>

          <Translation>
            {(t) => <Button onClick={this.signup} style={{ marginLeft: '25px' }}>{t('Zarejestruj.64')}</Button>}</Translation>
        <br />          
        </form>     </div>
      </div >
    );
  }
}
export default Login; 