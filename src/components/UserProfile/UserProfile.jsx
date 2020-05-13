import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import UserInfo from "./UserInfo";
import EditProfile from "./EditProfile";
import ManageCenters from "./Actions/ManageCenters/ManageCenters";
import ManageUsers from "./Actions/ManageUsers/ManageUsers";
import ManageStaffs from "./Actions/ManageStaffs/ManageStaffs";
import ManageRequests from "./Actions/ManageRequests/ManageRequests";
import NewCenter from "./Actions/ManageCenters/NewCenter";
import NewStaff from "./Actions/ManageStaffs/NewStaff";
import NewRequest from "./Actions/ManageRequests/NewRequest";
import NewUser from "./Actions/ManageUsers/NewUser";

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
            <ManageCenters
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "manageStaffs" ? (
            <ManageStaffs
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "manageUsers" ? (
            <ManageUsers
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "manageRequests" ? (
            <ManageRequests
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "newCenter" ? (
            <NewCenter />
          ) : profileRoute === "newStaff" ? (
            <NewStaff />
          ) : profileRoute === "newRequest" ? (
            <NewRequest />
          ) : profileRoute === "newUser" ? (
            <NewUser />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default UserProfile;
