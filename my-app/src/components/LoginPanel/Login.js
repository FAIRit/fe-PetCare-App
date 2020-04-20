import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react'
import fire from '../Firebase/firebase'
import { Translation } from 'react-i18next';
import i18next from 'i18next';
import En from '../Languages/Flags/en'
import Pl from '../Languages/Flags/pl'
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


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
      password: '',
      title: ' Log in',

    };
  }
  changeTitle = () => {
    this.setState({ title: ' Sing up' });
  };

  backToTitle = () => {
    this.setState({ title: " Log in" });
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      alert("Something went wrong...");
    })
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch((error) => {
        alert("Please add your e-mail and password");
      })
  }

  render() {
    return (<div>

      <div className="loginpanel">   <div className="language">  <Button onClick={handleClickPL}><Pl /></Button>
        <Button onClick={handleClickEN}><En /></Button></div>
        <div> <div className="toolip">
          <a data-tip data-for='happyFace'>          <Translation>
            {(t) => <p>{t('Potrzebujesz pomocy?.81')}</p>}</Translation>
          </a><ReactTooltip id='happyFace' type='error'>
            <span><p>The password must be at least 6 characters :)</p>
              <p>You can also login to with the test account:</p>
              <p>Login:  user@user.pl</p>
              <p>  Password: haslo123</p>
            </span>
          </ReactTooltip></div>
          <div className="backButton"> <p onClick={this.backToTitle}>
            <FontAwesomeIcon icon={faArrowLeft} size='2x' color="lightgrey" />
          </p></div>
        </div> <form className="loginform">

          <div className="login-data"> <h1 className="login-title">{this.state.title}</h1>

            <Translation>
              {(t) => <label>{t('Adres e-mail.62')}: </label>
              }</Translation>

            <Input size='small' value={this.state.email} onChange={this.handleChange} type="email" name="email" className="loginInput" />
          </div>
          <div className="login-data">
            <Translation>
              {(t) => <label>{t('Hasło.61')}:  </label>}
            </Translation>

            <Input size='small' value={this.state.password} onChange={this.handleChange} style={{ marginTop: '2px' }} type="password" name="password" className="loginInput" />


          </div>

          <Translation>
            {(t) => <Button type="submit" onClick={this.login} style={{ marginLeft: '65px', marginTop: '5px' }}> {t('Zaloguj.63')}</Button>}</Translation>

          <Translation>
            {(t) => <Button onClick={this.signup} style={{ marginLeft: '2px' }}>{t('Zarejestruj.64')}</Button>}</Translation>
          <br />
          <Translation>
            {(t) => <div className="register"><a onClick={this.changeTitle}>{t('Nie masz jeszcze konta.83')}?</a></div>}</Translation>
        </form>
      </div>
    </div >
    );
  }
}
export default Login; 