import React, { Component } from "react";
import User from "./User";
import EditUser from "./EditUser";
import NewUser from "./NewUser";

class ManageUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, onProfileRouteChange } = this.props;
    return (
      <div>
        <div className="new-center">
          <div className="w-10 tc pa2 mt3 br3 grow bg-blue white b pointer shadow-5">
            Add New User
          </div>
        </div>
        <div className="scroll">
          <table className="mt3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <User />
            </tbody>
          </table>
        </div>
      </div>
      // <EditUser />
      // <NewUser />
    );
  }
}

export default ManageUsers;
