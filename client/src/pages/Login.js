import React from "react";

function Login() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="login-form">
            <form className="login">
              <div className="form-group">
                <label className= "exampleInputEmail1"> </label>
                <input
                  type="email"
                  className="form-control"
                  id="email-input"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label className="exampleInputPassword1"></label>
                <input
                  type="password"
                  className="form-control"
                  id="password-input"
                  placeholder="Password"
                />
              </div>
              <div>
                <button type="submit" class="btn">
                  Login
                </button>
                <a href="Signup.js"></a>
                <button className="btn">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col">
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
