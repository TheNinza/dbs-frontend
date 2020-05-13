import React, { Component } from "react";
import Staff from "./Staff";
import EditStaff from "./EditStaff";
import NewStaff from "./NewStaff";

class ManageStaffs extends Component {
  state = {
    array: [],
  };

  render() {
    return (
      <div>
        <div className="new-center">
          <div className="w-10 tc pa2 mt3 br3 grow bg-blue white b pointer shadow-5">
            Add New Staff
          </div>
        </div>
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
              <Staff />
            </tbody>
          </table>
        </div>
      </div>
      // <EditStaff />
      // <NewStaff />
    );
  }
}

export default ManageStaffs;
