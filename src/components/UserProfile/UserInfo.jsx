import React, { Component } from "react";

class UserInfo extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <div className="tc f1 mt2 fw6 underline">
          <code>User Profile</code>
        </div>
        <div className="f2 mt2 fw3">
          <code>Name: Admin</code>
        </div>
        <div className="f3 mt2 fw2">
          <code>Email: email@example.com</code>
        </div>
        <div>
          <code className="f3 mt2 fw2">Phone: 98765432100</code>
        </div>
      </div>
    );
  }
}

export default UserInfo;
