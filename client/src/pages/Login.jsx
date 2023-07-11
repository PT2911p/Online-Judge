import React from 'react';
import Google from '../assets/images/google.png';
import Facebook from '../assets/images/facebook.png';
import Github from '../assets/images/github.png';
import { Link } from 'react-router-dom';
import "../App.css";
const Login = () => {

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  }


  return (
    <>
      <div className="login">
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google" onClick={google}>
              <img src={Google} alt="Google" className="icon" />
              Google
            </div>
            <div className="loginButton facebook">
              <img src={Facebook} alt="Facebook" className="icon" />
              Facebook
            </div>
            <div className="loginButton github">
              <img src={Github} alt="Github" className="icon" />
              Github
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="submit">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
