import React, { Component } from "react";
class center extends Component {
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
          <td>Hospital A</td>
          <td>Address Assflkhasdoffhweoifhosdifhsoidfnospd</td>
          <td>9876543210</td>
          <td>123</td>
          <td>87</td>
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
              <input
                type="submit"
                value="Show Staffs"
                className="grow mh2 pointer shadow-5 b bg-transparent f6 blue ba b--blue"
              />
            </div>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default center;
