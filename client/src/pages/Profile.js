import React, {Collapsible, CollapisbleItem} from "react";
import Navbar from "../components/Navbar";
import contextStore from "../utils/contextStore";



function Profile() {
  return (
    <contextStore.Consumer>
      {(props) => (
        <div>
        <Navbar />
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col m4">
            <h5 className="center-align">Profile</h5>
            <div className="info-container">
              {props.user.user === null ? "" : <h4>Name: {props.user.user.firstName} {props.user.user.lastName}</h4>}
              {props.user.user === null ? "": <h5>Email: {props.user.user.email}</h5>}
            </div>
          </div>

          <div className="col m4">
            <h5 className="center-align">Reading List</h5>
          </div>

          <div className="col m4">
            <h5 className="center-align">Notes</h5>
          </div>
        </div>
      
    </div>)}
    </contextStore.Consumer>

  );
}

export default Profile;
