import React, { Component } from "react";
import "./App.css";
import Nav from "../components/Nav/Nav";
import Home from "./home";
import Signin from "../components/Signin/Signin";
import UserProfile from "../components/UserProfile/UserProfile";
import QurantineCenters from "../components/QuarantineCenters/QuarantineCenters";

const initialState = {
  route: "register",
};

class App extends Component {
  state = initialState;

  render() {
    return (
      <div>
        <Nav />
        {/* <Home />
        <Signin />
         <QurantineCenters />*/}
        <UserProfile />
      </div>
    );
  }
}

export default App;
