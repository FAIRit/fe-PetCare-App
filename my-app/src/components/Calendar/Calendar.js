import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Translation } from 'react-i18next';
import "./main.scss";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [
      { title: "Clavaseptin-lek", start: new Date() },
      {
        title: "Weterynarz-wizyta",
        start: new Date("2020-04-03 01:00"),
        id: "1"
      },
      {
        title: "Gasrpid - lek",
        start: new Date("2020-04-05 09:00"),
        id: "2"
      },
      {
        title: "Semintra - lek",
        start: new Date("2020-04-05 10:00"),
        id: "3"
      },
      {
        title: "Gasrpid - lek",
        start: new Date("2020-04-06 09:00"),
        id: "4"
      },
      {
        title: "Semintra - lek",
        start: new Date("2020-04-06 10:00"),
        id: "99999999"
      },
      {
        title: "Weterynarz-wizyta",
        start: new Date("2020-04-15 10:00"),
        id: "5"
      },
      {
        title: "Weterynarz-wizyta",
        start: new Date("2020-04-27 10:00"),
        id: "5"
      },
      {
        title: "Gasrpid - lek",
        start: new Date("2020-03-05 09:00"),
        id: "6"
      },
      {
        title: "Semintra - lek",
        start: new Date("2020-03-05 10:00"),
        id: "7"
      },
      {
        title: "Gasrpid - lek",
        start: new Date("2020-03-06 09:00"),
        id: "8"
      },
      {
        title: "Semintra - lek",
        start: new Date("2020-03-06 10:00"),
        id: "9"
      },
      {
        title: "Weterynarz-wizyta",
        start: new Date("2020-03-15 10:00"),
        id: "10"
      },
      {
        title: "Weterynarz-wizyta",
        start: new Date("2020-03-27 10:00"),
        id: "11"
      },{
        title: "Gasrpid - lek",
        start: new Date("2020-04-22 09:00"),
        id: "12"
      },
      {
        title: "Semintra - lek",
        start: new Date("2020-04-22 10:00"),
        id: "13"
      },{
        title: "Gasrpid - lek",
        start: new Date("2020-03-24 09:00"),
        id: "12"
      },
      {
        title: "Semintra - lek",
        start: new Date("2020-03-24 10:00"),
        id: "13"
      }
    ]};
  
  render() {

  
  
    return (
      <div className="demo-app">
        <div className="demo-app-top">
        <Translation>
{
  (t, { i18n }) =>  <button className='btnCalendar' onClick={this.toggleWeekends}> {t('Przełącz na widok tygodnia.51')}</button>}
            </Translation>
&nbsp;
<Translation>{
(t, { i18n }) => <button className='btnCalendar' onClick={this.gotoPast}> {t('Cofnij się do poprzedniej daty.52')}</button>}
 </Translation>  &nbsp;

        </div>
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next, today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
               
        </div>
      </div>
    );
  }

  toggleWeekends = () => {
    this.setState({
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2020-03-01");
  };

  handleDateClick = arg => {
    if (true) {
      this.setState({
        calendarEvents: this.state.calendarEvents.concat({
          title: prompt("New Event"),
          start: arg.date,
          allDay: arg.allDay
        })
      });
    }
  };
}

