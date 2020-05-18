import React, { Component } from "react";

class EditCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center_type: [],
      center_id: this.props.data,
      center_name: "",
      center_address: "",
      center_contact_number: "",
      center_type_id: "",
      user_id: "",
    };
  }

  onbuttonsubmit = () => {
    fetch("http://localhost:3000/editCenter", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        center_id: this.state.center_id,
        center_name: this.state.center_name,
        center_address: this.state.center_address,
        center_contact_number: this.state.center_contact_number,
        center_type_id: this.state.center_type_id,
        user_id: this.state.user_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.center_id) {
          window.alert("Center Updated");
        }
      })
      .catch((err) => console.log("error", err));
  };

  componentDidMount() {
    fetch("http://localhost:3000/centerType")
      .then((response) => response.json())
      .then((data) => {
        if (data[0].center_type_id) {
          this.setState({ center_type: data });
        }
      })
      .catch((err) => console.log(err));
  }

  onNameChange = (event) => {
    this.setState({ center_name: event.target.value });
  };
  onaddressChange = (event) => {
    this.setState({ center_address: event.target.value });
  };
  oncontact_numberChange = (event) => {
    this.setState({ center_contact_number: event.target.value });
  };
  ontype_idChange = (event) => {
    this.setState({ center_type_id: event.target.value });
  };
  onidChange = (event) => {
    this.setState({ user_id: event.target.value });
  };

  render() {
    return (
      <div className="register-form br3 flex flex-column items-center center shadow-3 mt3">
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">
                Enter updated center details
              </legend>
              <code>Only non empty fields will be updated</code>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="center-address">
                  Address
                </label>
                <input
                  onChange={this.onaddressChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="center-address"
                  id="center-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="centerTypeId">
                  Center Type Id
                </label>
                <div>
                  {this.state.center_type.map((type) => {
                    return (
                      <div key={type.center_type_id}>
                        <code>{`${type.center_type_id} : ${type.center_type_description}`}</code>
                      </div>
                    );
                  })}
                </div>

                <input
                  onChange={this.ontype_idChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="centerTypeId"
                  id="centerTypeId"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="Phone">
                  Phone
                </label>
                <input
                  onChange={this.oncontact_numberChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="Phone"
                  id="Phone"
                />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="userid">
                  User Id of the Center Manager
                </label>
                <code className="red">
                  Make sure that the user is a center manager and is not
                  assigned any center before.
                </code>
                <input
                  onChange={this.onidChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="userid"
                  id="userid"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onbuttonsubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default EditCenter;
