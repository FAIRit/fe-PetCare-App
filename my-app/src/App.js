
import React, { Component, Suspense } from 'react';
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
import ListaPacjentow from './components/ListaPacjetow/ListaPacjentow'
import Archive from './components/Docs/archive'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import En from './components/Languages/Flags/en'
import Pl from './components/Languages/Flags/pl'



const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
 
function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (

    <div>
      <div className="language" style ={{width:'100%', padding:'2rem, 0'}}>
      <button onClick={()=>handleClick('en')}><En/></button>
      <button onClick={()=>handleClick('pl')}><Pl/></button>
      
      </div>
      <Router>
          <Menu />
          <Switch>
            <Route path="/Leki">
              <Medicines />
            </Route>
            <Route path="/Calendar">
            <Calendar/>
            </Route>
            <Route path="/doctors">
            <Doctors/>
            </Route>
            <Route path="/History">
            <History/>
            </Route>
            <Route path="/wyniki">
            <Results/>
            </Route>
            <Route path="/Diagramy">
            <Diagrams/>
            </Route>
            <Route path="/lista-pacjentow"> 
            <ListaPacjentow/>
            </Route>
            <Route path="/archiwum">
            <Archive/>
            </Route>
          </Switch>
      </Router>
      <div><p>{t('Language.1')}</p></div>
      </div>
  );
}

export default App;