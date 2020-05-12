import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import UserInfo from "./UserInfo";
import EditProfile from "./EditProfile";
import ManageCenters from "./Actions/ManageCenters/ManageCenters";
import ManageUsers from "./Actions/ManageUsers/ManageUsers";
import ManageStaffs from "./Actions/ManageStaffs/ManageStaffs";
import ManageServices from "./Actions/ManageRequests/ManageRequests";
import ManageRequests from "./Actions/ManageRequests/ManageRequests";

class UserProfile extends Component {
  state = {};
  render() {
    return (
      <div className="cf ph0-ns">
        <div className="fn fl-ns w-20-ns pr4-ns">
          <Sidebar />
        </div>
        <div className="fn fl-ns w-80-ns">
          <ManageRequests />
        </div>
      </div>
    );
  }
}

export default UserProfile;
