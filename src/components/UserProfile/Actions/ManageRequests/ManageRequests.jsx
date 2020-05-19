import React, { Component } from "react";
import Request from "./Request";

class ManageRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      center_id: "",
      filter: "",
    };
  }

  setCenterId = () => {
    fetch("http://localhost:3000/getcenteruser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: this.props.user.user_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ center_id: data.center_id });
      })
      .catch((err) => console.log("error", err));
  };

  updatelist = () => {
    fetch("http://localhost:3000/request")
      .then((response) => response.json())
      .then((requests) => {
        this.setState({ requests });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.setCenterId();
    fetch("http://localhost:3000/request")
      .then((response) => response.json())
      .then((requests) => {
        this.setState({ requests });
      })
      .catch((err) => console.log(err));
  }

  onfilter = (event) => {
    this.updatelist();
    this.setState({ filter: event.target.value });
    if (this.state.filter === "Unsolved") {
      const temp = this.state.requests.filter((req) => {
        return req.status_id === 1;
      });
      console.log(temp);
      this.setState({ requests: temp });
    } else if (this.state.filter === "Processed") {
      const temp = this.state.requests.filter((req) => {
        return req.status_id === 2;
      });
      console.log(temp);
      this.setState({ requests: temp });
    } else if (this.state.filter === "Discarded") {
      const temp = this.state.requests.filter((req) => {
        return req.status_id === 3;
      });
      console.log(temp);
      this.setState({ requests: temp });
    } else this.updatelist();
  };

  render() {
    const { user, onProfileRouteChange, sendData } = this.props;
    return (
      <div>
        <div className="new-request">
          {user.user_role_name !== "Government Official" ? (
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
        </div>
        {/* {user.role !== "Center Manager" ? (
          <div className="mt2">
            <label htmlFor="filters" className="mt3 f3 fw-3">
              Filters:
            </label>
            <div className="flex">
              <div className="ba pa2">
                <label htmlFor="request-status" className="mh2">
                  Request Status
                </label>
                <select onClick={this.onfilter} id="status" name="status">
                  <option value="All">All</option>
                  <option value="Unsolved">Unsolved</option>
                  <option value="Processed">Processed</option>
                  <option value="Discarded">Discarded</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          ""
        )} */}

        <div className="scroll-req">
          <table className="mt3">
            <thead>
              <tr>
                <th>Request Id</th>
                <th>Quarantine Center</th>
                <th>Request Descreption</th>
                <th>Request Status</th>
                <th>User Name/(Id) (User who responded) </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.requests.map((request) => {
                if (user.user_role_name === "Center Manager") {
                  if (this.state.center_id === request.center_id) {
                    return (
                      <Request
                        key={request.request_id}
                        user={user}
                        onProfileRouteChange={onProfileRouteChange}
                        request={request}
                        sendData={sendData}
                        updatelist={this.updatelist}
                      />
                    );
                  } else return null;
                } else {
                  return (
                    <Request
                      key={request.request_id}
                      user={user}
                      onProfileRouteChange={onProfileRouteChange}
                      request={request}
                      sendData={sendData}
                      updatelist={this.updatelist}
                    />
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ManageRequests;
