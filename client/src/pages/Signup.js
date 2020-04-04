import React from "react";

function Signup() {
  return (
    <div className="row-form-1">
      <div className="basic-info" col-md-4 col-md-offset-3>
        <div className="welcome-text">
          <br />
          <h2>Welcome to Excelsior Comics!</h2>
          <br />
          <h5>
            Your one stop shop for all things comics and manga. Please fill out
            the form to help us better customize your discovery platform and
            community experience!
          </h5>
        </div>
        <div className="info-inner">
          <form className="signup">
            <div className="form-group">
              <label for="first-name-input"></label>
              <input
                type="text"
                className="form-control"
                id="first-name-input"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label for="last-name-input"></label>
              <input
                type="text"
                className="form-control"
                id="last-name-input"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label for="example-input-email1"></label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label for="example-input-password1"></label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label for="example-input-password1"></label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <div
              style
              display="none"
              id="alert"
              className="alert"
              role="alert"
            >
              <span className="sr-only">Error:</span>
              <span className="msg"></span>
            </div>
          </form>
        </div>
        <div className="row">
          <h2>Great!</h2>
          <h5>Please choose your interests!</h5>
          <div className="row checkboxes">
            <form className="category-selector">
              <div className="col">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Comic Books</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Graphic Novels</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Manga</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Anime</span>
                  </label>
                </p>
              </div>
            </form>
          </div>
        </div>
        <button type="button" className="btn">
          Next
        </button>
        <p> Or log in <a href="Login.js"> here </a> </p>
      </div>
    </div>
  );
}

export default Signup;

