import React, { Component } from "react";
class center extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onbuttonedit = () => {
    this.props.sendData(this.props.center.center_id);
    this.props.onProfileRouteChange("editCenter");
  };

  onbuttondelete = () => {
    fetch("http://localhost:3000/deleteCenter", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        center_id: this.props.center.center_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 1 || data === "1") {
          window.alert("center deleted");
          this.props.updatelist();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { center } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td>{`${center.center_id}`}</td>
          <td>{`${center.center_name}`}</td>
          <td>{`${center.center_type_description}`}</td>
          <td> {`${center.user_name}`} </td>
          <td> {`${center.user_id}`} </td>
          <td> {`${center.center_address}`} </td>
          <td> {`${center.center_contact_number}`} </td>
          <td> {`${center.number_staffs}`} </td>
          <td> {`${center.number_patients}`} </td>
          <td>
            <div className="flex justify-center items-center">
              <input
                onClick={this.onbuttonedit}
                type="submit"
                value="Edit"
                className="grow mh2 pointer shadow-5 b ba b--black bg-transparent f6"
              />
              <input
                onClick={this.onbuttondelete}
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
