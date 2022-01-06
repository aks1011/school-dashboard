import { Component } from "react";
import "./info.css";
import Loader from "./../loader";

class Info extends Component {
  state = { loading: true, data: null };

  async componentDidMount() {
    const userApiURL = "https://randomuser.me/api";
    const response = await fetch(userApiURL);
    const data = await response.json();
    this.setState({ loading: false, data: data.results[0] });
  }

  render() {
    if (this.state.loading) {
      return (
        <div style={{ position: "relative" }}>
          <Loader />
        </div>
      );
    }
    if (!this.state.loading && this.state.data) {
      return (
        <div className="info-card">
          <div className="card-background">
            <div className="display-picture" style={{ textAlign: "center" }}>
              <img src={this.state.data.picture.large} alt="displaypicture" />
            </div>

            <div className="information-container">
              <i className="icon-2 fa fa-birthday-cake" aria-hidden="true"></i>
              <i className="icon-3 fa fa-envelope" aria-hidden="true"></i>
              <i
                className="icon-4 fa fa-volume-control-phone"
                aria-hidden="true"
              ></i>
              <i className="icon-5 fa fa-address-card" aria-hidden="true"></i>
              <div className="info info-1">{`${this.state.data.name.title}. ${this.state.data.name.first} ${this.state.data.name.last} `}</div>
              <div className="info info-2">{`${
                this.state.data.dob.date.split("T")[0]
              }`}</div>
              <div className="info info-3">{`${this.state.data.email}`}</div>
              <div className="info info-4">{`${this.state.data.cell}`}</div>
              <div className="info info-5">{`${this.state.data.location.street.number}, ${this.state.data.location.street.name}, ${this.state.data.location.city}`}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Info;
