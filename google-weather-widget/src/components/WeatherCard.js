import React, { Component } from "react";
import "../App.css";

class WeatherCard extends Component {
  render() {
    return (
      <div className="weather-card">
        <p>{this.props.day}</p>
        <img src={this.props.type} alt="img"></img>
        <p className="temperature">
          <span className="max">{this.props.maxTemperature}</span>{" "}
          <span className="min">{this.props.minTemperature}</span>
        </p>
      </div>
    );
  }
}

export default WeatherCard;
