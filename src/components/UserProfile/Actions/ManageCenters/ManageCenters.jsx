import React, { Component } from "react";
import Center from "./center";
import EditCenter from "./EditCenter";
import NewCenter from "./NewCenter";

class ManageCenters extends Component {
  state = {
    array: [],
  };

  render() {
    return (
      <div>
        <div className="new-center">
          <div className="w-10 tc pa2 mt3 br3 grow bg-blue white b pointer shadow-5">
            Add New Center
          </div>
        </div>
        <div className="scroll">
          <table className="mt3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Total Beds</th>
                <th>Patients</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <Center />
            </tbody>
          </table>
        </div>
      </div>
      // <EditCenter />
      // <NewCenter />
    );
  }
}

export default ManageCenters;
