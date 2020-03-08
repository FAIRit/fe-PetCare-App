import React from 'react';
import './App.css';
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


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function App() {
  return (
      <Router>
        <div className="App">
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
          </Switch>
        </div>
      </Router>
  );
}


export default App;
