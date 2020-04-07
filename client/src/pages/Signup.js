import React from "react";
import SignupCard from "../components/SignupCard";
import "./style.css";

function Signup() {
  return (
    <div className="container">

      <div className="row">
        <div className="col s12"></div>
          <h2>Welcome to Excelsior Comics!</h2>
      </div>

      <div className="row">
        <div className="col s12"></div>
          <p>Your one stop shop for all things comics and manga. Please fill out
            the form to help us better customize your discovery platform and
            community experience!</p>
      </div>

      <SignupCard />

    </div>

  );
}

export default Signup;

