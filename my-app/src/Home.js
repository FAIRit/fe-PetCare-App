import React from 'react';
import Menu from './components/menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Medicines from './components/Medicines/Medicines'
import Calendar from './components/Calendar/Calendar'
import Doctors from './components/Doctors/doctors'
import History from './components/History/History'
import Diagrams from './components/Diagrams/Diagrams'
import Results from './components/Results/Results'
import ListaPacjentow from '././components/ListaPacjetow/ListaPacjentow'
import Archive from './components/Docs/archive'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const Home = () => {


  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/Leki">
          <Medicines />
        </Route>
        <Route path="/Calendar">
          <Calendar />
        </Route>
        <Route path="/doctors">
          <Doctors />
        </Route>
        <Route path="/History">
          <History />
        </Route>
        <Route path="/wyniki">
          <Results />
        </Route>
        <Route path="/Diagramy">
          <Diagrams />
        </Route>
        <Route path="/lista-pacjentow">
          <ListaPacjentow />
        </Route>
        <Route path="/archiwum">
        <Archive/>
        </Route>
          </Switch>
    </Router>


  );
}

export default Home;