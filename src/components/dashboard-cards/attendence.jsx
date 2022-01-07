import { Component } from "react";
import "./attendence.css";

class Attendence extends Component {
  render() {
    return (
      <div className="calender">
        <div className="card-title">Calender Attendence</div>
        <div className="month">
          {[
            "jan",
            "feb",
            "mar",
            "apr",
            "may",
            "jun",
            "jul",
            "aug",
            "sep",
            "oct",
            "nov",
            "dec",
          ].map((month, index) => (
            <span className="month-name" key={index}>
              {month}
            </span>
          ))}
        </div>
        <div className="day">
          {["mon", "tues", "wed", "thur", "fri", "sat", "sun"].map(
            (name, index) => (
              <span className="day-name" key={index}>
                {name}
              </span>
            )
          )}
        </div>
        <div className="date">
          <span className=""></span>
          <span className=""></span>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
          ].map((date, index) => (
            <span className="date-name" key={index}>
              {date}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Attendence;
