import React, { Component } from "react";
import Staff from "./Staff";

class ManageStaffs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, onProfileRouteChange } = this.props;
    return (
      <div>
        {user.role !== "Center Manager" ? (
          <div className="new-center">
            <div
              onClick={() => {
                onProfileRouteChange("newCenter");
              }}
              className="w-10 tc pa2 mt3 br3 grow bg-blue white b pointer shadow-5"
            >
              Add New Staff
            </div>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        <div className="scroll">
          <table className="mt3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Working-Hours</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <Staff user={user} onProfileRouteChange={onProfileRouteChange} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ManageStaffs;
