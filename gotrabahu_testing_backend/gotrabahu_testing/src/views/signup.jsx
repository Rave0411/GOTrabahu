import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";
import { useNavigate } from 'react-router-dom';

export default function signup(){

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

          axiosClient.post("/singup",payload).then(({data})=>{
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
      <section className="header-section">
        <div className="header-container">
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
          <form onSubmit = {Submit}>
            <input ref = {emailRef} type ="email" placeholder="Email" className="email-input"/>

            <p>
              <span className="email-text">Enter Email</span>
            </p>
             <input  ref = {passwordRef} type="password" className="password-input" placeholder="Password"/>
              <p className="password-text">Create Password</p>
             <input ref = {confirmpasswordRef} type="password" className="password-input2" placeholder="Confirm Password"/>
            <button className="login-button" onClick={() => window.location.href = '/login'}>Log in</button>
            <button type = "submit" className="signin-button">Sign in</button>
            </form>
            <div className="login-text">
                  <p> Already have an account? click{' '} <Link to="/login" className="login-text2"> Sign in </Link>{' '} to proceed.
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
