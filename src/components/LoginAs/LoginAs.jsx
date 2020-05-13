import React, { Component } from "react";

class LoginAs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Ram",
        role: "Government Official",
        id: 1,
      },
    };
  }

  roledescription = (role) => {
    if (role === "Government Official") {
      return "The user will be able to manage different quarantine centers, staffs and respond to any request from the center.";
    } else if (role === "Center Manager") {
      return "The user will be able to manage the staffs, patients and send requests of his/her center only.";
    } else if (role === "Database Administrator") {
      return "The user will be able to manage the managers, government officials can perform all the CRUD operations on the database.";
    }
  };

  optionSelect = (event) => {
    this.setState({
      user: {
        name: "ram",
        role: event.target.value,
        id: 1,
      },
    });
  };

  onLogin = () => {
    this.props.loadUser(this.state.user);
    this.props.onRouteChange("userProfile");
  };

  render() {
    return (
      <div className="flex flex-column items-center br3 shadow-3 pa3">
        <div className="pa2 br3 tc shadow-3">
          <label className="f1 b underline">Login As</label>
        </div>
        <div>
          <div className="pa3 tc">
            <select
              onChange={this.optionSelect}
              name="users"
              id="users"
              className="pa2 f3 br3 dim shadow-3"
            >
              <option value="Government Official">Government Official</option>
              <option value="Center Manager">Center Manager</option>
              <option value="Database Administrator">
                Database Administrator
              </option>
            </select>
          </div>
          <div className="tc">
            <input
              onClick={this.onLogin}
              type="button"
              value="Login"
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib shadow-3 br3"
            />
          </div>
        </div>
        <div className="ba mt5 mh2 br3 pa2">
          <div className="tc f4 underline">
            <label>Role:</label>
          </div>
          <div className="pa2">
            <code>{this.roledescription(this.state.user.role)}</code>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginAs;
