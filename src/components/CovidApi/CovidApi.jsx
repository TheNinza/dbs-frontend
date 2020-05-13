import React, { Component } from "react";

class CovidApi extends Component {
  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  };

  getcovidresults = () => {
    let element = {};
    fetch("https://api.covid19api.com/country/india")
      .then((response) => response.json())
      .then((data) => {
        element = data[data.length - 1];
        console.log(element);
        this.setState({
          confirmed: element.Confirmed,
          recovered: element.Recovered,
          deaths: element.Deaths,
        });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 onClick={this.getcovidresults} className="pointer">
          Click me for covid updates
        </h1>
        <div>
          {this.state.confirmed === 0
            ? "unable to get fetch"
            : `Confirmed: ${this.state.confirmed} | Recovered: ${this.state.recovered} | Deaths: ${this.state.deaths}`}
        </div>
      </div>
    );
  }
}

export default CovidApi;
