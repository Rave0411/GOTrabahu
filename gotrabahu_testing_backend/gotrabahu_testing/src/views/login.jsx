import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";



export default function login(){

    const emailRef = useRef();
    const passwordRef = useRef();

    const {setUser, setToken} = useStateContext();

    const Submit =  (ev) =>{
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post("/login",payload).then(({data})=>{
            setUser(data.user);
            setToken(data.token);
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
      <section className="header-section_2">
        <div className="header-container_2">
        </div>
      </section>

      {/* Body Section */}
      <section className="body-section_2">
         <p className="body-text_2"> Every great journey starts with a single login. </p>
        <div className="body-container_2">
        <div className="body-rectangular_2" />
        </div>
        <div style={{ padding: '20px' }}>
          </div>
         <div className="login-form_2" > </div>
          <form onSubmit={Submit}>
            <div className = "email-box_2">
              <input ref={emailRef} type="email" placeholder="Email" className="email-input_2"/>
            </div>
            <div>
               <input ref={passwordRef} type="password" className="password-input_2" placeholder="Password"/>
            </div>
            <div>
              <button type="submit" className="login-button_2">Log in</button>
            </div>
          </form>
            <div>
              <button className="signin-button_2" onClick={() => window.location.href = '/register'}>Sign in</button>
            </div>
            <div className="signin-text_2">
                  <p> Don't have an account? click{' '} <Link to="/register" className="signin-text2_2"> Sign in </Link>{' '} to create.
                    </p>
            </div>
            <div>
              <button >
              <a className="forgot-password_2" href="default.asp" target="_blank">Forgot password</a>
              </button>
            </div>
      </section>
    </div>

    )

}
