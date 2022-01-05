import { Component } from "react";
import "./main.css";
import Dashboard from "./dashboard";
import Teachers from "./teachers";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="main-base">
        <div className="main-light-layer">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/teachers" component={Teachers} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Main;
