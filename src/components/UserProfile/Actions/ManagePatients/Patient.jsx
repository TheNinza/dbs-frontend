import React, { Component } from "react";
class Patient extends Component {
  state = {};
  render() {
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

export default Patient;
