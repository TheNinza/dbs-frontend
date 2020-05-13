import React, { Component } from "react";
import Request from "./Request";

class ManageRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, onProfileRouteChange } = this.props;
    return (
      <div>
        <div className="new-request">
          {user.role !== "Government Official" ? (
            <div
              onClick={() => {
                onProfileRouteChange("newRequest");
              }}
              className="w-10 tc pa2 mt3 br3 grow bg-blue white b pointer shadow-5"
            >
              Add New Request
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}

          <div className="mt2">
            <label htmlFor="filters" className="mt3 f3 fw-3">
              Filters:
            </label>
            <div className="flex">
              <div className="mh2 pa2 ba">
                <input type="text" placeholder="Quarantine Center" />
              </div>
              <div className="ba pa2">
                <label htmlFor="request-status" className="mh2">
                  Request Status
                </label>
                <select id="status" name="status">
                  <option value="All">All</option>
                  <option value="Unsolved">Unsolved</option>
                  <option value="Processed">Processed</option>
                  <option value="Discarded">Discarded</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-req">
          <table className="mt3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Quarantine Center</th>
                <th>Request Descreption</th>
                <th>Request Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <Request />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ManageRequests;
