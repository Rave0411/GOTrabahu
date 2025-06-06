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
import { useNavigate } from "react-router-dom";
import on from "../assets/images/eye-on.png";

export default function loginEmployee() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser, setToken } = useStateContext();
  const navigate = useNavigate();

  const Submit = (ev) => {
    ev.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/employees/loginEmployee", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
  };

  return (
    <div>
      {/* Header Section */}
      <section className="header-section-login">
        <div className="top-shape-login"></div>
        <button>
          <Link className="back-button-login" to="/" />
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
        <div className="login-form">
          <img src={bodylogo} alt="body Logo" className="Gologo-login" />
        </div>
        <div className="login-form-input">
          <form onSubmit={Submit}>
            <div className="email-box">
              <input ref={emailRef} type="email" placeholder="Email" className="email-input-login" />
            </div>
            <div>
              <img src={email} alt="email" className="email-icon-login" />
            </div>
            <div>
              <img src={passwordIcon} alt="password" className="password-icon-login" />
              <input
                ref={passwordRef}
                id="hs-toggle-password"
                type={isPasswordVisible ? "text" : "password"}
                className="password-input-login"
                placeholder="Password"
              />
              <button type="button" className="password-show-hide" onClick={togglePasswordVisibility}>
                <img src={isPasswordVisible ? on : off} className="eye-icon-login" alt="eye" />
              </button>
            </div>
            <div>
              <button type="submit" className="login-button-bar">
                Log in
              </button>
            </div>
          </form>
        </div>
        <div>
          <button className="signin-button-bar" onClick={() => (window.location.href = "signupEmployee")}>
            Sign in
          </button>
        </div>
        <div className="signin-text">
          <p>
            Don't have an account? click{" "}
            <span>
              <button>
                <a className="signup-text-portal" href="signupemployee">
                  Sign in
                </a>
              </button>
            </span>{" "}
            to create.
          </p>
        </div>
        <div>
          <button>
            <Link className="forgot-password" to="/forgot" />
          </button>
        </div>
      </section>
    </div>
  );
}
