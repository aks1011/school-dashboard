import { Component } from "react";
import "./toppers.css";
import d1 from "./../assets/deepika_3.jpg";
import d2 from "./../assets/bane.jpg";
import d3 from "./../assets/deepika_1.jpg";

class Toppers extends Component {
  render() {
    const toppers = [
      {
        rank: "1st",
        studentName: "Naina Sharma",
        percentage: "99.2%",
        profilePicture: d1,
      },
      {
        rank: "2nd",
        studentName: "Bane Singh",
        percentage: "98.4%",
        profilePicture: d2,
      },
      {
        rank: "3rd",
        studentName: "Deepika Rathore",
        percentage: "98.2%",
        profilePicture: d3,
      },
    ];

    return (
      <div className="topper-card">
        <div className="card-title">
          Toppers
          <span className="view-all">
            View top 10 <strong>&</strong> more
          </span>
        </div>
        <div className="toppers">
          {toppers.map((topper, index) => (
            <div className="topper" key={index}>
              <div className="picture">
                <img
                  className="img-fluid"
                  src={topper.profilePicture}
                  alt="profilepicture"
                ></img>
              </div>
              <div className="name">{topper.studentName}</div>
              <div className="percentage">{topper.percentage}</div>
              <div className="rank">{topper.rank}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Toppers;
