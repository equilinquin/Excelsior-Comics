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
    <div className="container" style={{paddingTop: "20px"}}>

      <div className="row " style={{paddingTop: "30px"}}>
        <div className="col s12 m6">
          <h3>Create a New Account</h3>
          <p>Excelsior Comics is your one stop shop for all things Marvel comics. Sign up for a free account to save your discoveries to your reading list and keep track of your favorite titles and characters.</p>
          <p className="">Already have an account? Log in <Link to="/login">here</Link></p>
          <p className="">Click <Link to="/home">here</Link> to explore as a guest</p>
        </div>

        <div className="col s12 m6">
          <SignupCard handleSubmit={onSubmit} />
        </div>
      </div>

    </div>
  );
}

export default Signup;

