import React, { Component } from "react";
import Patient from "./Patient";

class ManagePatients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onProfileRouteChange } = this.props;
    return (
      <div>
        <div className="new-Patient">
          <div
            onClick={() => {
              onProfileRouteChange("newPatient");
            }}
            className="w-10 tc pa2 mt3 br3 grow bg-blue white b pointer shadow-5"
          >
            Add New Patient
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
              <Patient />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ManagePatients;
