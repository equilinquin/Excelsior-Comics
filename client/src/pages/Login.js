import React from "react";

function Login() {
  return (
    <div>
      <div className="row">
        <div className="col s3" id="login-left">
          <div className="login-form">
            <form className="login">
              <div className="form-group">
                <label for="exampleInputEmail1"></label>
                <input
                  type="email"
                  class="form-control"
                  id="email-input"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1"></label>
                <input
                  type="password"
                  class="form-control"
                  id="password-input"
                  placeholder="Password"
                />
              </div>
              <div>
                <button type="submit" class="btn btn-default">
                  Login
                </button>
                <a href="signup.html"></a>
                <button class="btn btn-default">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col s9 image-right">
        <div className="text">
          <h1>Welcome to Excelsior Comics!</h1>
          <div className="P">
            {" "}
            Discover the world of digital comics.
            <br />
            Happy Hunting!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
