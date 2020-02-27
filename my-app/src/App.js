import React from 'react';
import './App.css';
import Menu from './components/menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Leki from './components/leki'
import Calendar from './components/Calendar'
import Doctors from './components/doctors'
import History from './components/History'
import Diagramy from './components/Diagramy'
import Wyniki from './components/wyniki'


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
              <Leki />
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
            <Wyniki/>
            </Route>
            <Route path="/Diagramy">
            <Diagramy/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}


export default App;
