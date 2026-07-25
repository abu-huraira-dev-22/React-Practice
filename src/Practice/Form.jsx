import React, { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

  const submitForm = (e) => {
    e.preventDefault();
    if (email.includes("@") == false) {
      setError('Invalid Email')
      return
    }
    if (password.length < 6) {
        setError("Password too short")
    return  
    
    }
    console.log(userName,email,password)
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-[80vh] max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <form action="" onSubmit={submitForm} className="flex flex-col">
                <label className="label">Username</label>
                <input
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="text"
                  className="input"
                  placeholder="username"
                  value={userName}
                  required
                />
                <label className="label">Email</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  required
                />
                <label className="label">Password</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4" type="submit">
                  Login
                </button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
