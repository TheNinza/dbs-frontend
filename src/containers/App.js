import React, { Component } from "react";
import "./App.css";
import Nav from "../components/Nav/Nav";
import Home from "./home";
import UserProfile from "../components/UserProfile/UserProfile";
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
  user: {
    name: "",
    role: "",
    id: 0,
  },
  isSignedIn: false,
  route: "home",
  profileRoute: "userInfo",
};

class App extends Component {
  state = initialState;

  loadUser = (data) => {
    this.setState({
      user: {
        name: data.name,
        role: data.role,
        id: data.id,
      },
    });
  };

  onRouteChange = (route) => {
    if (route === "home") {
      this.setState(initialState);
    } else if (route === "userProfile") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  };

  onProfileRouteChange = (profileRoute) => {
    this.setState({ profileRoute });
  };

  render() {
    const { isSignedIn, user, route, profileRoute } = this.state;
    return (
      <div>
        <Particles className="particles" params={particlesOptions} />
        <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />

        {route === "home" ? (
          <Home onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <UserProfile
            user={user}
            profileRoute={profileRoute}
            onProfileRouteChange={this.onProfileRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
