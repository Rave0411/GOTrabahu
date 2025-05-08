import React from "react";
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
        <button>
          <a className="back-button-login" href="landingpage"/>
        </button>
        <div className="header-container-login">
          <img src={logo} alt="header Logo" className="rec-logo-login" />  
        </div>
      </section>

      {/* Body Section */}
      <section className="container-login">
         <p className="body-text"> Every great journey starts with a single login. </p>
        <div className="body-background">
          <img src={Background} alt="body background" className="background-login" /> 
        </div>
        <div class="grey-fade-login"></div>
         <div class="login-form" > 
          <img src={bodylogo} alt="body Logo" className="Gologo-login" /> 
        </div> 
          <div class = "email-box">
            <input type="email" placeholder="Email" className="email-input-login"/>
          </div>
          <div> 
            <img src={email} alt="email" className="email-icon-login"/>
          </div> 
          <div>


              <img src={passwordIcon} alt="password" className="password-icon-login"/>
             <input id="hs-toggle-password" type="password" className="password-input-login" placeholder="Password"/> 
              <button type="button" className="password-show-hide" id="toggle-password-btn"> 
              <img src={off} className="eye-icon-login" alt="eye-off">
                </img>
              </button>

          </div>
          <div>
            <button className="login-button-bar">
              <text className="login-button-text">Log in</text>  
            </button> 
          </div> 
            <div>
            <button className="signin-button-bar">
             <text className="signin-button-text">Sign in</text>
            </button>
            </div>
            <div className="signin-text"> 
                  <p>
                    Don't have an account? click <span> <button> <a className="signup-text-portal" href="signupemployee">Sign in</a> </button> </span> to create.
                  </p>
            </div>
            <div>
              <button >
              <a className="forgot-password" href="forgotpass">Forgot password</a>
              </button>
            </div>
      </section>
    </div>
  );
}

export default App;