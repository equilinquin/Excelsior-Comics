import React from "react";
import "./Signup.css";

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

      <div className="row">

        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Sign Up</span>
                <div className="col s12"></div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="first_name" type="text" className="validate" />
                      <label className="white-text" for="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="last_name" type="text" className="validate" />
                      <label className="white-text" for="last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label className="white-text" for="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label className="white-text" for="password">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="passwordConfirm" type="password" className="validate" />
                    <label className="white-text" for="passwordConfirm">Confirm Password</label>
                  </div>
                </div>
              </div>
              <div className="card-action">
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Signup;

