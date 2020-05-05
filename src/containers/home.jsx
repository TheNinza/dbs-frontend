import React, { Component } from "react";
import "tachyons";
import Register from "../components/Register/Register";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="cf ph3 ph5-ns pv5">
        <div className="fn fl-ns w-50-ns pr4-ns">
          <h1 className="mb3 mt0 lh-title">
            Lend your property as Quarantine Center
          </h1>
          <time className="f6 ttu tracked gray">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique explicabo ut est dolore ab, ea nemo velit dolorem earum
              soluta voluptates totam odio temporibus et quibusdam a iusto
              facilis? Quam.
            </p>
          </time>
        </div>
        <div className="fn fl-ns w-50-ns">
          <Register />
        </div>
      </div>
    );
  }
}

export default Home;
