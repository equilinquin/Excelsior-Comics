import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import API from "../utils/login-api";
import contextStore from "../utils/contextStore";
// import "../styles/login.css";

function Login() {
  const {setUser, user} = useContext(contextStore);
  const [inputState, setInputState] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(name,value)
    setInputState({ ...inputState, [name]: value });
  };
  const handleSubmit = data => {
    API.login(data).then(res=>{
      console.log(res.config)
      setUser({user:res.config.data})
    })}

  const submitForm = () => {
    if (inputState.email && inputState.password) {
      handleSubmit(inputState);
      console.log("login confirmed");
    } else {
      console.log("this account does not exist");
    }
  };

  return (
    user? <Redirect to="/home" />:
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="title">Welcome to Excelsior Comics!</h1>
          <h3>Discover the world of digital comics.</h3>
          <h3>Happy hunting!</h3>
        </div>
      </div>
      <form onSubmit={(e) => {e.preventDefault();submitForm(e)}}>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12 m6">
                <input id="email" type="email" name="email" className="validate" onChange={e => handleChange(e)}/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12 m6">
                <input id="password" type="password" name="password" className="validate" onChange={e => handleChange(e)}/>
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Log In
                </button>
              </div>
              <div className="input-field col s12">
                <h5>
                  Don't have an account yet? Sign up{" "}
                  <Link to="/signup">here</Link>
                </h5>
                <h5>
                  Click <Link to="/home">here</Link> to explore as a guest
                </h5>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
