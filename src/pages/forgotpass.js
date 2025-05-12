import React from "react";
import "./forgotpass.css";
import Headerlogo from "./images/header logo.jpg";
import arrow from "./images/Arrow.png";
import bodylogo from "./images/Gologo.png";
import email from "./images/email picture.png";
import passwordIcon from "./images/password picture.png";
import on from "./images/eye-on.png";
import Background from "./images/background.png";



function App() {

  const onClick = () => {
    window.location.href = "https://gotrabahu.com/";
  }
  return (
    <div>
      {/* Header Section */}
      <section className="header-section-forgotpass">
        <div className="header-containerforgotpass">
          <img src={Headerlogo} alt="header Logo" className="header-logo-forgotpass1" />
          <button onClick={onClick} style={{ position: 'relative', top: '10px', left: '31px' }}>
              <img src={arrow} alt = "header-back-arrow" href="login"/>
          </button>
        </div>
      </section>

      {/* Body Section */}
      <section className="body-section-forgotpass">
        <div className="body-background">
          <img src={Background} className="background-forgotpass" />
        </div>
         <p className="body-text"> Forgotten password? Let's recover it safely. </p>  
        <div className="container-forgotpass"> 
        <div className="grey-box-rectangular1" />
        <div className="grey-box-rectangular2" />
        </div>
        <div style={{ padding: '20px' }}>
          </div>
         <div class="login-form" > </div> 
         <img src={bodylogo} alt="body Logo" className="body-logo" />  
          <div class = "email-box">
            <input type="email" placeholder="Email" className="email-input"/>
          </div>
          <div class = "code-box">
            <input type="code" placeholder="Enter code" className="code-input"/>
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
          <p className="password-text">You've successfully reset your password. Please enter a new password to proceed</p>
          <div>
             <input id="hs-toggle-password" type="password" className="password-input2" placeholder="Confirm new password"/> 
              <button type="button" className="password-show-hide2" id="toggle-password-btn"> 
              <img src={on} className="eye-icon" alt="eye-off">
                </img>
              </button>
          </div>
          <div>
            <button className="resend-code-button">Resend code</button> 
          </div> 
            <div>
            <button className="verify-code-button">Verify code</button>
            </div>
            <div>
            <button className="set-password-button">Set password</button>
            </div>
     
            <div>
              <ul className="code-text"> 
                We've sent you a code to your email to recover your password. If you don't see it, check your spam folder.
              </ul> 
            </div>
      </section>
    </div>
  );
}

export default App;