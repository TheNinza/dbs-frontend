import React, { Component } from "react";
class center extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>1</td>
          <td>Hospital A</td>
          <td>sjf;lksadjf;lnsafweiuohweofkjwo</td>
          <td>Unsolved</td>

          <td>
            <div className="flex justify-center items-center">
              <input
                type="submit"
                value="Process"
                className="grow mh2 pointer shadow-5 b ba b--blue blue bg-transparent f6"
              />
              <input
                type="submit"
                value="Delete"
                className="grow mh2 pointer shadow-5 b bg-transparent f6 red ba b--red"
              />
              <input
                type="submit"
                value="Discard"
                className="grow mh2 pointer shadow-5 b bg-transparent f6 yellow ba b--yellow"
              />
            </div>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default center;
