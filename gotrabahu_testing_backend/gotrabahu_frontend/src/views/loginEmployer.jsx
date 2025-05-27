import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient.js";
import { useStateContext } from "../contexts/contextprovider.jsx";
import { useState } from "react";
import logo from "../assets/images/header logo.jpg";
import Background from "../assets/images/background.png";
import bodylogo from "../assets/images/Gologo.png";
import email from "../assets/images/email picture.png";
import passwordIcon from "../assets/images/password picture.png";
import off from "../assets/images/eye-off.png";





export default function loginEmployer(){

    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const eyeicon = document.getElementById('eyeicon');
    const password = document.getElementById('password');

    const emailRef = useRef();
    const passwordRef = useRef();

    const {setUser, setToken} = useStateContext();

    const Submit =  (ev) =>{
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post("/employers/loginEmployer",payload).then(({data})=>{
            setUser(data.user);
            setToken(data.token);
            navigate('/dashboard');
    }).catch(err => {
        const response = err.response;
        if(response && response.status === 422){
            console.log(response.data.errors);
        }
    });
    }

    return (
        <div>
      {/* Header Section */}
      <section className="header-section-login">
        <div className="top-shape-login"></div>
        <button>
          <Link className="back-button-login" to='/'></Link>
        </button>
        <div className="header-container-login">
          <img src={logo} alt="header Logo" className="rec-logo-login" />
        </div>
      </section>

      {/* Body Section */}
      <section className="container-login">
         <p className="body-text-login"> Every great journey starts with a single login. </p>
        <div className="body-background">
          <img src={Background} alt="body background" className="background-login" />
        </div>
        <div className="grey-fade-login"></div>
         <div className="login-form" >
          <img src={bodylogo} alt="body Logo" className="Gologo-login" />
        </div>
        <div className="login-form-input">
        <form  onSubmit={Submit}>
          <div className = "email-box">
            <input ref = {emailRef} type="email" placeholder="Email" className="email-input-login"/>
          </div>
          <div>
            <img src={email} alt="email" className="email-icon-login"/>
          </div>
          <div>
              <img src={passwordIcon} alt="password" className="password-icon-login"/>
             <input ref={passwordRef} id="hs-toggle-password" type="password" className="password-input-login" placeholder="Password"/>
              <button type="button" className="password-show-hide" id="toggle-password-btn">
              <img src={off} className="eye-icon-login" alt="eye-off-2">
                </img>
              </button>
          </div>
          <div>
            <button type ="submit" className="login-button-bar">Log in</button>
          </div>
            </form>
            </div>
            <div>
            <button className="signin-button-bar" onClick={() => window.location.href = 'signupEmployer'}>
                Sign in
            </button>
            </div>
            <div className="signin-text">
                  <p>
                    Don't have an account? click <span> <button> <a className="signup-text-portal" href="signupEmployer">Sign in</a> </button> </span> to create.
                  </p>
            </div>
            <div>
              <button >
              <a className="forgot-password" href="forgotpass">Forgot password</a>
              </button>
            </div>
      </section>
    </div>

    )

}
