import { Component } from "react";
import "./main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Dashboard from "./dashboard";
import Teachers from "./teachers";

class Main extends Component {
  render() {
    const activeStyle = {
      color: "#322a57",
      background: "#f2f0f5",
      fontWeight: "900",
    };
    return (
      <div className="base-wrapper">
        <Router>
          <div className="menu-wrapper">
            <div className="menu-light-wrapper">
              <div className="logo">
                <i className="fa fa-houzz" aria-hidden="true"></i>
              </div>
              <ul className="nav-link-wrapper">
                <li>
                  <NavLink
                    className="nav-link"
                    activeStyle={activeStyle}
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeStyle={activeStyle}
                    to="/teachers"
                  >
                    Teachers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeStyle={activeStyle}
                    to="/students"
                  >
                    Students
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeStyle={activeStyle}
                    to="/exams"
                  >
                    Exams
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeStyle={activeStyle}
                    to="/events"
                  >
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeStyle={activeStyle}
                    to="/results"
                  >
                    Results
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeStyle={activeStyle}
                    to="/attendence"
                  >
                    Attendence
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-light-wrapper">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/teachers" component={Teachers} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;