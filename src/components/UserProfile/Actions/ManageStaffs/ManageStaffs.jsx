import React, { Component } from "react";
import Staff from "./Staff";

class ManageStaffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: [],
    };
  }

  updatelist = () => {
    fetch("http://localhost:3000/staff")
      .then((response) => response.json())
      .then((staffs) => {
        this.setState({ staffs });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    fetch("http://localhost:3000/staff")
      .then((response) => response.json())
      .then((staffs) => {
        this.setState({ staffs: staffs });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { user, sendData, onProfileRouteChange } = this.props;
    return (
      <div>
        {user.role !== "Center Manager" ? (
          <div className="newstaff">
            <div
              onClick={() => {
                onProfileRouteChange("newStaff");
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
                <th>Contact Number</th>
                <th>Quarantine Center</th>
                <th>Role</th>
                <th>Working-Hours</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.staffs.map((staff) => {
                return (
                  <Staff
                    key={staff.staff_id}
                    sendData={sendData}
                    user={user}
                    onProfileRouteChange={onProfileRouteChange}
                    staff={staff}
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

export default ManageStaffs;
