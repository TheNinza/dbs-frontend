import React from "react";
import CovidApi from "../CovidApi/CovidApi";

const Nav = () => {
  return (
    <nav className="dt w-100 border-box pa3 ph5-ns shadow-5">
      <div className="dtc v-mid mid-gray w-50 f2 white">
        Quarantine Center Management Tool
      </div>
      <div className="dtc v-mid w-75 tr">
        {/* <CovidApi /> */}
        <div className="grow link dim light-gray f6 f5-ns dib mr3 mr4-ns pointer">
          Login
        </div>
        <div className="grow link dim light-gray f6 f5-ns dib mr3 mr4-ns pointer">
          About
        </div>
        <div className="grow link dim light-gray f6 f5-ns dib mr3 mr4-ns pointer">
          Quarantine Centers
        </div>
      </div>
    </nav>
  );
};

export default Nav;
