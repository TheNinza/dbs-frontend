import React, { Component } from "react";

class EditPatient extends Component {
  state = {};
  render() {
    return (
      <div className="register-form br3 flex flex-column items-center center shadow-3 mt3">
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Edit details</legend>
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
                <label className="db fw6 lh-copy f6" htmlFor="phone">
                  phone
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="admited-on">
                  Date of Admission
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="date"
                  name="admited-on"
                  id="admited-on"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="Address">
                  Address
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="Address"
                  id="Address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="Status">
                  Patient Status
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="Status"
                  id="Status"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Done"
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default EditPatient;
