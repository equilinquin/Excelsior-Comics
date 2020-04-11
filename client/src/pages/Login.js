import React from "react";
import { Link } from "react-router-dom";
// import "../styles/login.css";

function Login() {
  return (
    <div className="container">

      <div className="row">
        <div className="col s12">
          <h1 className="title">Welcome to Excelsior Comics!</h1>
          <h3>Discover the world of digital comics.</h3>
          <h3>Happy hunting!</h3>
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12 m6">
              <input id="password" type="email" className="validate" />
              <label for="password">Email</label>
            </div>
            <div className="input-field col s12 m6">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <button className="btn waves-effect waves-light" type="submit" name="action">Log In</button>
            </div>
            <div className="input-field col s12">
              <h5>Don't have an account yet? Sign up <Link to="/signup">here</Link></h5>
              <h5>Click <Link to="/home">here</Link> to explore as a guest</h5>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Login;
