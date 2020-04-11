import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div>
      <Navbar />

      <div className="row" style={{marginTop: "20px"}}>

        <div className="col m4">
          <h5 className="center-align">Profile</h5>

        </div>

        <div className="col m4">
          <h5 className="center-align">Reading List</h5>

        </div>

        <div className="col m4">
          <h5 className="center-align">Notes</h5>

        </div>

      </div>

    </div>
  );
}

export default Profile;
