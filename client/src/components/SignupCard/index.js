import React from "react";

function SignupCard() {
    return (
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Sign Up</span>
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
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </div>
          </div>
        </div>
    );
  }
  
  export default SignupCard;
  