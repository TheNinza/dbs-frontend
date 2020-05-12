import React, { Component } from "react";
import "./App.css";
import Nav from "../components/Nav/Nav";
import Home from "./home";
import Signin from "../components/Signin/Signin";
import UserProfile from "../components/UserProfile/UserProfile";
import QurantineCenters from "../components/QuarantineCenters/QuarantineCenters";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        area: 300,
      },
    },
  },
};

const initialState = {
  route: "register",
};

class App extends Component {
  state = initialState;

  render() {
    return (
      <div>
        <Particles className="particles" params={particlesOptions} />
        <Nav />
        <UserProfile />
        {/* 
        <Signin /><Home />
         <QurantineCenters />*/}
      </div>
    );
  }
}

export default App;
