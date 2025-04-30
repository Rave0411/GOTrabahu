import React from "react";
import "./App.css";
import logo from "./images/header logo.jpg";
import arrow from "./images/arrow.png";
import bodylogo from "./images/logo.png";
import email from "./images/email picture.png";
import passwordIcon from "./images/password picture.png";
import off from "./images/eye-off.png";
import on from "./images/eye-on.png";
import { useState } from "react"


function App() {

<link rel="stylesheets" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  const onClick = () => {
    window.location.href = "https://gotrabahu.com/";
  }
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const eyeicon = document.getElementById('eyeicon');
  const password = document.getElementById('password');

  return (
    <div>
      {/* Header Section */}
      <section className="header-section">
        <div className="header-container">
          <img src={logo} alt="header Logo" className="header-logo" />
          <button onClick={onClick} style={{ position: 'relative', top: '10px', left: '31px' }}>
              <img src={arrow} alt = "header-arrow"/>
          </button>
        </div>
      </section>

      {/* Body Section */}
      <section className="body-section">
         <p className="body-text"> Every great journey starts with a single login. </p>  
        <div className="body-container"> 
        <div className="body-rectangular" />
        </div>
        <div style={{ padding: '20px' }}>
          </div>
         <div class="login-form" > </div> 
         <img src={bodylogo} alt="body Logo" className="body-logo" />  
          <div class = "email-box">
            <input type="email" placeholder="Email" className="email-input"/>
          </div>
          <div> 
            <img src={email} alt="email" className="email-icon"/>
          </div> 
          <div>


              <img src={passwordIcon} alt="password" className="password-icon"/>
             <input id="hs-toggle-password" type="password" className="password-input" placeholder="Password"/> 
              <button type="button" className="password-show-hide" id="toggle-password-btn"> 
              <img src={off} className="eye-icon" alt="eye-off">
                </img>
              </button>

          </div>
          <div>
            <button className="login-button">Log in</button> 
          </div> 
            <div>
            <button className="signin-button">Sign in</button>
            </div>
            <div className="signin-text"> 
                  <p>
                    Don't have an account? click <span className="signin-text2">Sign in</span> to create.
                  </p>
            </div>
            <div>
              <button >
              <a className="forgot-password" href="default.asp" target="_blank">Forgot password</a>
              </button>
            </div>
      </section>
    </div>
  );
}

export default App;