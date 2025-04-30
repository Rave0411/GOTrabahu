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
         <p className="body-text"> Sign in and set sail on your greatest journey yet! </p>  
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
            <p>
              <span className="email-text">Enter Email</span>
            </p>
          <div>
              <img src={passwordIcon} alt="password" className="password-icon"/>
             <input id="hs-toggle-password" type="password" className="password-input" placeholder="Password"/> 
              <button type="button" className="password-show-hide" id="toggle-password-btn"> 
              <img src={on} className="eye-icon" alt="eye-off">
                </img>
              </button>
          </div>
          <p className="password-text">Create Password</p>
          <div>
             <input id="hs-toggle-password" type="password" className="password-input2" placeholder="Confirm Password"/> 
              <button type="button" className="password-show-hide2" id="toggle-password-btn"> 
              <img src={on} className="eye-icon" alt="eye-off">
                </img>
              </button>
          </div>
          <div>
            <button className="login-button">Log in</button> 
          </div> 
            <div>
            <button className="signin-button">Sign in</button>
            </div>
            <div className="login-text"> 
                  <p>
                    Already have an account? click <span className ="login-text2">Log in</span> to proceed.
                  </p>
            </div>
            <div>
              <ul className="password-text2"> 
                <li>Password must contain at least 8 characters</li>
                </ul> 
            </div>
      </section>
    </div>
  );
}

export default App;