import React, { Component } from "react";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar white bg-light-green">
        <div className="flex flex-column justify-center tc ">
          <div className="intro fw6">
            <div className="w-90 pa3 dim center br3 grow shadow-5 mt2 pointer bg-red">
              <code>Admin</code>
            </div>
            <div className="w-90 pa3 dim br3 center grow shadow-5 mt2 pointer bg-orange">
              <code>Edit Profile</code>
            </div>
          </div>
          <div className="actions fw4 mt4">
            <div className="w-90 pa3 dim br3 center grow shadow-5 mt2 pointer bg-blue">
              <code>Manage Quarantine Centers</code>
            </div>
            <div className="w-90 pa3 dim br3 center grow shadow-5 mt2 pointer bg-blue">
              <code>Manage Staff</code>
            </div>
            <div className="w-90 pa3 dim br3 center grow shadow-5 mt2 pointer bg-blue">
              <code>Manage Requested Services</code>
            </div>
            <div className="w-90 pa3 dim br3 center grow shadow-5 mt2 pointer bg-blue">
              <code>Manage Users</code>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
