import React, { Component } from "react";

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onProfileRouteChange } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td>1</td>
          <td>Staff A</td>
          <td>Sweeper</td>
          <td>9876543210</td>
          <td>Address asfadhfopweiehoshfpsoifha</td>
          <td>900-1500</td>
          <td>
            <div className="flex justify-center items-center">
              <input
                onClick={() => {
                  onProfileRouteChange("editCenter");
                }}
                type="submit"
                value="Edit"
                className="grow mh2 pointer shadow-5 b ba b--black bg-transparent f6"
              />
              <input
                type="submit"
                value="Delete"
                className="grow mh2 pointer shadow-5 b bg-transparent f6 red ba b--red"
              />
            </div>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Staff;
