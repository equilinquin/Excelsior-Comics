import React, {useState} from "react";

function SignupCard({handleSubmit}) {
  const [inputState, setInputState] = useState({
  })

  const handleChange = ({name,value})=>{
    setInputState({...inputState, [name]:value})
  }

  const submitForm = ()=>{

    inputState.email && inputState.firstName && inputState.lastName && inputState.password && inputState.passwordConfirm ?
    (inputState.password === inputState.passwordConfirm ? handleSubmit(inputState) : console.log('passwords need to match!'))
    : console.log('please fill out all fields!')
  }

  return (
    <form onSubmit={(e)=>{e.preventDefault();submitForm()}}>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <div className="col s12"></div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={({target})=>{handleChange(target)}}
                  id="first_name"
                  name="firstName"
                  type="text"
                  className="validate"
                />
                <label className="white-text" htmlFor="first_name">
                  First Name
                </label>
              </div>
              <div className="input-field col s6">
                <input
                  onChange={({target})=>{handleChange(target)}}
                  id="last_name"
                  name="lastName"
                  type="text"
                  className="validate"
                />
                <label className="white-text" htmlFor="last_name">
                  Last Name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={({target})=>{handleChange(target)}}
                  id="email"
                  type="email"
                  name="email"
                  className="validate"

                />
                <label className="white-text" htmlFor="email">
                  Email
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={({target})=>{handleChange(target)}}
                  id="password"
                  type="password"
                  name="password"
                  className="validate"

                />
                <label className="white-text" htmlFor="password">
                  Password
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={({target})=>{handleChange(target)}}
                  id="passwordConfirm"
                  type="password"
                  name="passwordConfirm"
                  className="validate"
  
                />
                <label className="white-text" htmlFor="passwordConfirm">
                  Confirm Password
                </label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Sign Up
            </button>
          </div>
        </div>
    </form>
  );
}

export default SignupCard;
