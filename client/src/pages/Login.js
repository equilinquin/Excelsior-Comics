import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import API from "../utils/login-api";
import contextStore from "../utils/contextStore";
import "../styles/login.css";

function Login() {
  const {setUser, user} = useContext(contextStore);
  const [inputState, setInputState] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputState({ ...inputState, [name]: value });
  };
  const handleSubmit = data => {
    API.login(data).then(res=>{
      setUser({user:res.config.data})
    })}

  const submitForm = () => {
    if (inputState.email && inputState.password) {
      handleSubmit(inputState);
      getUser(inputState.email)
      console.log("login confirmed");
    } else {
      console.log("this account does not exist");
    }
  };

  const getUser = item => {
    console.log(item);
    API.getUsers(item);
  }

  return (
    user? <Redirect to="/home" />:
    <div className="container" id="main">
      <div className="row">
        <div className="col s12">
          <h1 className="title" id="title">Welcome to Excelsior Comics!</h1>
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
                  name="action" id="btn"
                >
                  Log In
                </button>
              </div>
              <div className="input-field col s12" id="options">
                <p>
                  Don't have an account yet? Sign up{" "}
                  <Link to="/signup">here</Link>
                </p>
                <p>
                  Click <Link to="/home">here</Link> to explore as a guest
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
