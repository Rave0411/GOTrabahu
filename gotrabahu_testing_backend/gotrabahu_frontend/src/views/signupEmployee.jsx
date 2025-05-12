import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/header logo.jpg";
import arrow from "../assets/images/Arrow.png";
import background from "../assets/images/background.png";
import bodylogo from "../assets/images/Gologo.png";
import email from "../assets/images/email picture.png";
import passwordIcon from "../assets/images/password picture.png";
import off from "../assets/images/eye-off.png";

export default function signupEmployee(){
    const [text, setText] = useState("");
    const handleChange = (event) => {
    setText(event.target.value);
    }
    const eyeicon = document.getElementById('eyeicon');
    const password = document.getElementById('password');

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmpasswordRef = useRef();
    const [message, setMessage] = useState('');
    const [output, setOutput] = useState(null);
    const {setUser, setToken} = useStateContext();
    const navigate = useNavigate();

    const Submit =  (ev) =>{
        ev.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmpasswordRef.current.value;

        setMessage('');
        setOutput(null);

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        const payload = {
            email: emailRef.current.value,
            password: password,
        };

          axiosClient.post("/signupEmployee",payload).then(({data})=>{
          setUser(data.user);
          setToken(data.token);
        }).catch(err => {
            const response = err.response;
            if(response && response.status === 422){
                console.log(response.data.errors);
            }
        });
    }

    return(
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
          <img src={background} alt="body background" className="background-signup_6" />
        </div>
        <div className="grey-fade-signup_6"></div>
        <div className="top-rec-employee_6">
          <span className="text-employee_6">Employee</span>
        </div>
         <div className="login-form_6" >
          <img src={bodylogo} alt="body Logo" className="Gologo-login_6" />
        </div>
        <div className = "email-box_6">
          <form onSubmit ={Submit}>
            <span className="top-text-email_6">Enter Email</span>
            <span className="top-text-password_6">Create Password</span>
            <input ref={emailRef} type="email" placeholder="Email" className="email-input-login_6"/>
              <img src={passwordIcon} alt="password" className="password-icon-login_6"/>
             <input ref={passwordRef} id="hs-toggle-password" type="password" className="password-input-login_6" placeholder="Password"/>
             <input ref={confirmpasswordRef} type="password" className="confirm-password-input_6" id="confirmpassword" placeholder="Confirm Password"/>
            <button type="submit" className="create-button_6">Create Account</button>
            <button type="button" className="password-show-hide_6" id="toggle-password-btn">
              <img src={off} className="eye-icon-employee_6" alt="eye-off"></img>
              </button>
            <button type="button" className="password-show-hide2_6" id="toggle-password-btn">
              <img src={off} className="eye-icon-employee_6" alt="eye-off"></img>
            </button>
             <div>
            <img src={email} alt="email" className="email-icon-login_6"/>
          </div>
            </form>
            </div>
            <div className="login-text_6">
            <p>Already have an account? click <span> <button> <a className="login-text-portal" href="login">Log in</a> </button> </span> to proceed.</p>
            </div>
              <div className="Password-length_6">Password must contain atleast 8 Characters</div>
        </section>
    </div>

    );
}
