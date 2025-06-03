import React from "react";
import "./signupemployee.css";
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
      <section className="header-section-login_6">
        <div className="top-shape-login_6"></div>
        <div className="header-container-login_6">
          <img src={logo} alt="header Logo" className="logo-signup_6" />
          
          <img src={arrow} alt = "header-arrow_6"/>
          
        </div>
        <button>
          <a className="back-button-signup_6" href="login"/>
        </button>
      </section>

      {/* Body Section */}
      <section className="container-login_6">
         <p className="body-text_6"> Every great journey starts with a single login. </p>
        <div className="body-background_6">
          <img src={Background} alt="body background" className="background-signup_6" /> 
        </div>
        <div class="grey-fade-signup_6"></div>
        <div className="top-rec-employee_6">
          <text className="text-employee_6">Employee</text>
        </div>
         <div class="login-form_6" > 
          <img src={bodylogo} alt="body Logo" className="Gologo-login_6" /> 
        </div> 
          <div class = "email-box_6">
            <text className="top-text-email_6">Enter Email</text>
            <text className="top-text-password_6">Create Password</text>
            <input type="email" placeholder="Email" className="email-input-login_6"/>
          </div>
          <div> 
            <img src={email} alt="email" className="email-icon-login_6"/>
          </div> 
          <div>


              <img src={passwordIcon} alt="password" className="password-icon-login_6"/>
             <input id="hs-toggle-password" type="password" className="password-input-login_6" placeholder="Password"/> 
              <button type="button" className="password-show-hide_6" id="toggle-password-btn"> 
              <img src={off} className="eye-icon-employee_6" alt="eye-off">

                </img>
              </button>

          </div>
          <input type="password" className="confirm-password-input_6" id="confirmpassword" placeholder="Confirm Password"/>
            <div>
            <button>
             <a className="Create-button_6" href="employee_profile">
              <text className="Create-account-text">Create Account</text>
             </a>
            </button>
            </div>
            <div className="signin-text_6"> 
                  <p>
                    Already have an account? click <span> <button> <a className="login-text-portal" href="login">Log in</a> </button> </span> to proceed.
                  </p>
            </div>
            <div>
              <div className="Password-length_6">* Password must contain atleast 8 Characters</div>
            </div>
      </section>
    </div>
  );
}

export default App;