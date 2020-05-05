import React, { Component } from "react";
import Center from "./center";
import EditCenter from "./EditCenter";
import EditProfile from "../../EditProfile";

class ManageCenters extends Component {
  state = {
    array: [],
  };

  pushElement = () => {
    for (let a = 0; a < 5; a++) {
      this.state.array.push(<Center />);
    }
    console.log("ok");
  };

  render() {
    return (
      // <div>
      //   <div className="scroll">
      //     <table className="mt3">
      //       <thead>
      //         <tr>
      //           <th>Id</th>
      //           <th>Name</th>
      //           <th>Address</th>
      //           <th>Total Beds</th>
      //           <th>Patients</th>
      //           <th>Actions</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         <Center />
      //       </tbody>
      //     </table>
      //   </div>
      // </div>
      <EditCenter />
    );
  }
}

export default ManageCenters;
