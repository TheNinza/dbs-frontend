import React, { Component } from "react";
import Center from "./center";

class ManageCenters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centers: [],
    };
  }

  updatelist = () => {
    fetch("http://localhost:3000/center")
      .then((response) => response.json())
      .then((centers) => {
        this.setState({ centers });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    fetch("http://localhost:3000/center")
      .then((response) => response.json())
      .then((centers) => {
        this.setState({ centers });
      })
      .catch((err) => console.log(err));
    this.setState({ deleted: false });
  }

  render() {
    const { user, onProfileRouteChange, sendData } = this.props;
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
              Add New Center
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
                <th>Center Type</th>
                <th>Center Manager</th>
                <th>Center Manager Id</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Staffs</th>
                <th>Patients</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.centers.map((center) => {
                return (
                  <Center
                    key={center.center_id}
                    user={user}
                    onProfileRouteChange={onProfileRouteChange}
                    center={center}
                    sendData={sendData}
                    updatelist={this.updatelist}
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

export default ManageCenters;
