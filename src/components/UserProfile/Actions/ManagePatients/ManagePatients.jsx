import React, { Component } from "react";
import Patient from "./Patient";

class ManagePatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
    };
  }

  updatelist = () => {
    fetch("http://localhost:3000/patient")
      .then((response) => response.json())
      .then((patients) => {
        this.setState({ patients });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    fetch("http://localhost:3000/patient")
      .then((response) => response.json())
      .then((patients) => {
        if (this.props.profileRoute === "centerPatients") {
          const temp = patients.filter(
            (patient) => patient.center_id === this.props.data
          );
          this.setState({ patients: temp });
        } else this.setState({ patients: patients });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { user, sendData, onProfileRouteChange, profileRoute } = this.props;
    return (
      <div>
        {profileRoute !== "centerPatients" ? (
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
        ) : (
          <React.Fragment></React.Fragment>
        )}

        <div className="scroll">
          <table className="mt3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Quarantine Center</th>
                <th>Date of Admission</th>
                <th>Stay Duration</th>
                <th>Status</th>
                {profileRoute !== "centerPatients" ? (
                  <th>Actions</th>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </tr>
            </thead>
            <tbody>
              {this.state.patients.map((patient) => {
                return (
                  <Patient
                    key={patient.patient_id}
                    sendData={sendData}
                    user={user}
                    onProfileRouteChange={onProfileRouteChange}
                    patient={patient}
                    updatelist={this.updatelist}
                    profileRoute={profileRoute}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ManagePatients;
