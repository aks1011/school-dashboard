import { Component } from "react";
import "./events.css";

class Events extends Component {
  render() {
    const events = [
      { eventTitle: "Parent teachers meeting", eventDate: "Thur 10 Sep 10:00AM" },
      { eventTitle: "Annul function", eventDate: "Sun 15 Oct 04:00PM" },
      { eventTitle: "Nainital trip", eventDate: "Fri 20 Nov 06:00PM" },
      { eventTitle: "Internal assesment", eventDate: "Mon 10 Dec 10:00AM" },
    ];

    return (
      <div className="">
        <div className="card-title">
          Events and Activities <span className="view-all">View all</span>
        </div>
        <div className="events">
          {events.map((ev, index) => (
            <div className="event-title" key={index}>
              {ev.eventTitle} <span className="event-date">{ev.eventDate}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Events;
