import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import UserInfo from "./UserInfo";
import EditProfile from "./EditProfile";
import ManageCenters from "./Actions/ManageCenters/ManageCenters";
import ManageUsers from "./Actions/ManageUsers/ManageUsers";
import ManageStaffs from "./Actions/ManageStaffs/ManageStaffs";
import ManageServices from "./Actions/ManageRequests/ManageRequests";
import ManageRequests from "./Actions/ManageRequests/ManageRequests";

const initialstate = {};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = initialstate;
  }
  render() {
    const { user, profileRoute, onProfileRouteChange } = this.props;
    return (
      <div className="cf ph0-ns">
        <div className="fn fl-ns w-20-ns pr4-ns">
          <Sidebar user={user} onProfileRouteChange={onProfileRouteChange} />
        </div>
        <div className="fn fl-ns w-80-ns">
          {profileRoute === "userInfo" ? (
            <UserInfo user={user} />
          ) : profileRoute === "editProfile" ? (
            <EditProfile />
          ) : profileRoute === "manageCenters" ? (
            <ManageCenters />
          ) : profileRoute === "manageStaffs" ? (
            <ManageStaffs />
          ) : profileRoute === "manageUsers" ? (
            <ManageUsers />
          ) : profileRoute === "manageRequests" ? (
            <ManageRequests />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default UserProfile;
