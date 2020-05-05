import React, { Component } from "react";
import UserInfo from "./UserInfo";
import EditProfile from "./EditProfile";
import ManageCenters from "./Actions/ManageCenters/ManageCenters";

class UserProfile extends Component {
  state = {};
  render() {
    return (
      <div className="cf ph0-ns">
        <div className="fn fl-ns w-20-ns pr4-ns">
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
                  <code>Role4</code>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fn fl-ns w-80-ns">
          <ManageCenters />
        </div>
      </div>
    );
  }
}

export default UserProfile;
