import React, { Component } from "react";

class EditProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="register-form center br3 shadow-2 mt3">
          <main className="pa4 black-80">
            <div className="measure ">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">
                  Enter Updated Details
                </legend>
                <code>(Enter the fields that you want to update)</code>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
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
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="phone"
                    id="phone"
                  />
                </div>
              </fieldset>
              <div className="flex">
                <input
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
