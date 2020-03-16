import React, { Component } from "react";
import {
  Calendar,
  momentLocalizer,
} from 'react-big-calendar';
import moment from "moment";
import events from '../../services/events';

const localizer = momentLocalizer(moment)

class App extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date(2019, 3, 9)}
          defaultView="month"
          events={events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default App;