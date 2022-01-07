import { Component } from "react";
import "./dashboard.css";
import Attendence from "./dashboard-cards/attendence";
import Events from "./dashboard-cards/events";
import Toppers from "./dashboard-cards/toppers";
import Info from "./dashboard-cards/info";

class Dashboard extends Component {
  render() {
    const basicInfo = [
      { icon: "fa fa-university", title: "Schools", quantity: "80" },
      { icon: "fa fa-users", title: "Teachers", quantity: "1450" },
      { icon: "fa fa-graduation-cap", title: "Students", quantity: "3879" },
      { icon: "fa fa-user", title: "Parents", quantity: "3220" },
    ];

    return (
      <div className="">
        <div className="header-bar">
          Welcome to Smart School
          <span>
            Year 2021-2022 <i className="fa fa-calendar" aria-hidden="true"></i>
          </span>
        </div>
        <div className="main-info-box">
          {basicInfo.map((item, index) => (
            <div className="info-item" key={index}>
              <div>
                <i
                  className={`${item.icon}`}
                  style={{ fontSize: "2.5rem", padding: "14px 0px" }}
                  aria-hidden="true"
                ></i>
              </div>
              <hr className="vertical-line" />
              <div style={{ padding: "10px 0" }}>
                <p className="title">{item.title}</p>
                <p className="quantity">{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="dashboard">
          <div className="dashboard-cards">
            <div className="card">
              <Attendence />
            </div>
            <div className="card">
              <Events />
            </div>
            <div className="card">
              <Info />
            </div>
            <div className="card">
              <Toppers />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
