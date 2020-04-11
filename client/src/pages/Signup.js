import React, {useContext} from "react";
import { Link,Redirect } from "react-router-dom";
import SignupCard from "../components/SignupCard";
import "./style.css";
import API from '../utils/login-api'
import contextStore from '../utils/contextStore'

function Signup() {
  const {setUser, user} = useContext(contextStore)
  const onSubmit = data => {
    API.signup(data).then(res=>{
      setUser({user: res.data._doc})
    })}

  return (
  user? <Redirect to='/home'/> :
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

      <SignupCard
        handleSubmit={onSubmit}
   />

      <div>
        <h5>Already have an account? Log in <Link to="/login">here</Link></h5>
        <h5>Click <Link to="/home">here</Link> to explore as a guest</h5>
      </div>

    </div>

  );
}

export default Signup;

