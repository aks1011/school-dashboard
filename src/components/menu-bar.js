import { Component } from "react";
import "./menu-bar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MenuBar extends Component {
  render() {
    return (
      <div className="menu-base">
        <div className="light-layer">
          <div className="logo">
            <i className="fa fa-houzz" aria-hidden="true"></i>
          </div>
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/teachers">Teachers</Link>
                </li>
                <li>Students</li>
                <li>Exams</li>
                <li>Events</li>
                <li>Results</li>
                <li>Attendence</li>
              </ul>
            </nav>
          </Router>
        </div>
      </div>
    );
  }
}

export default MenuBar;
