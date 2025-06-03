import React from "react";
import "./signupemployer.css";
import logo from "./images/header logo.jpg";
import arrow from "./images/Arrow.png";
import bodylogo from "./images/Gologo.png";
import email from "./images/email picture.png";
import passwordIcon from "./images/password picture.png";
import off from "./images/eye-off.png";
import on from "./images/eye-on.png";
import { useState } from "react"
import Background from "./images/background.png";


function App() {

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const eyeicon = document.getElementById('eyeicon');
  const password = document.getElementById('password');

  return (
    <div>
      {/* Header Section */}
      <section className="header-section-login">
        <div className="top-shape-login"></div>
        <div className="header-container-login">
          <img src={logo} alt="header Logo" className="logo-signup" />
          
          <img src={arrow} alt = "header-arrow"/>
          
        </div>
        <button>
          <a className="back-button-signup" href="login"/>
        </button>
      </section>

      {/* Body Section */}
      <section className="container-login">
         <p className="body-text"> Every great journey starts with a single login. </p>
        <div className="body-background">
          <img src={Background} alt="body background" className="background-signup" /> 
        </div>
        <div class="grey-fade-signup"></div>
        <div className="top-rec-employer">
          <text className="text-employer">Employer</text>
        </div>
         <div class="login-form" > 
          <img src={bodylogo} alt="body Logo" className="Gologo-login" /> 
        </div> 
          <div class = "email-box">
            <text className="top-text-email">Enter Email</text>
            <text className="top-text-password">Create Password</text>
            <input type="email" placeholder="Email" className="email-input-login"/>
          </div>
          <div> 
            <img src={email} alt="email" className="email-icon-login"/>
          </div> 
          <div>


              <img src={passwordIcon} alt="password" className="password-icon-login"/>
             <input id="hs-toggle-password" type="password" className="password-input-login" placeholder="Password"/> 
              <button type="button" className="password-show-hide" id="toggle-password-btn"> 
              <img src={off} className="eye-icon-employer" alt="eye-off">
                </img>
              </button>

          </div>
          <input type="password" className="confirm-password-input" id="confirmpassword" placeholder="Confirm Password"/>
          <div>
            <button>
              <a className="Create-Button-employer" href="employer_profile">
              <text className="Create-button-text-employer">Create Account</text>  
              </a>
            </button> 
          </div>
            <div className="signin-text"> 
                  <p>
                    Already have an account? click <span> <button> <a className="login-text-portal" href="login">Log in</a> </button> </span> to proceed.
                  </p>
            </div>
            <div>
              <div className="Password-length">* Password must contain atleast 8 Characters</div>
            </div>
      </section>
    </div>
  );
}

export default App;