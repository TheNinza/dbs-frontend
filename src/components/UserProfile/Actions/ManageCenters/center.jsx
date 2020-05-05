import React, { Component } from "react";
class center extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>1</td>
          <td>Hospital A</td>
          <td>Address A</td>
          <td>123</td>
          <td>87</td>
          <td>
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
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default center;
