import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Traveler (Template 12)</title>
        <meta property="og:title" content="Login - Traveler (Template 12)" />
      </Helmet>
      <div className="login-container1">
        <h2 className="login-text">
          <span>Company/Employer</span>
          <br></br>
          <span> Name: </span>
        </h2>
        <input
          type="text"
          id="CompanyName"
          required
          placeholder="Employer / Company Name"
          autoComplete="organization"
          className="login-company-name input inputOnContactMe"
        />
        <h2 className="login-text04">
          <span>Account Password:</span>
          <br></br>
        </h2>
        <input
          type="password"
          id="AccountPassword"
          required
          placeholder="Account Password"
          autoComplete="current-password"
          className="login-account-password input inputOnContactMe"
        />
        <h2 className="login-text07">
          <span>Password:</span>
          <br></br>
        </h2>
        <button className="login-send-offer button">
          <span className="login-text10">
            <span>LOGIN</span>
            <br></br>
          </span>
        </button>
        <h2 className="login-text13">
          <span>or</span>
          <br></br>
        </h2>
        <button className="login-send-offer1 button">
          <span className="login-text16">
            <span>REGISTER</span>
            <br></br>
          </span>
        </button>
      </div>
      <h1 className="login-text19">LOG IN/REGISTER</h1>
    </div>
  )
}

export default Login
