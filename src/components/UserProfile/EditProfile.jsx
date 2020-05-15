import React, { Component } from "react";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 6,
      user_name: "",
      user_email: "",
      user_phone: "",
      user_role: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ user_name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ user_email: event.target.value });
  };

  onPhoneChange = (event) => {
    this.setState({ user_phone: event.target.value });
  };

  onRoleChange = (event) => {
    this.setState({ user_role: event.target.value });
  };

  onButtonSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="register-form center br3 shadow-2 mt3">
          <main className="pa4 black-80">
            <div className="w-80 center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0 tc">
                  Enter Updated Details
                </legend>
                <code>(Enter the fields that you want to update)</code>
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
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    onChange={this.onPhoneChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="phone"
                    id="phone"
                  />
                </div>

                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="Role">
                    Role
                  </label>
                  <input
                    onChange={this.onRoleChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="Role"
                    id="Role"
                  />
                </div>
              </fieldset>
              <div className="flex">
                <input
                  onClick={this.onButtonSubmit}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Submit"
                />
                <input
                  className="b ph3 mh4 pv2 input-reset ba b--red bg-transparent grow pointer f6 dib red"
                  type="submit"
                  value="Delete Account"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default EditProfile;
