import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div className="">
      <div className="tc f1 mt2 fw6 underline">
        <code>User Profile</code>
      </div>
      <div className="flex flex-column justify-center shadow-3 w-50 center pa2 br3 mt3">
        <div className="f2 mt2 fw3">
          <code>Name:{` ${user.name}`} </code>
        </div>
        <div className="f3 mt2 fw2">
          <code>Role: {`${user.role}`}</code>
        </div>
        <div className="f3 mt2 fw2">
          <code>Email: email@example.com</code>
        </div>
        <div>
          <code className="f3 mt2 fw2">Phone: 98765432100</code>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
