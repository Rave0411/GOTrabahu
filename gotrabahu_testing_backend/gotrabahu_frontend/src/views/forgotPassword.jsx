import logo from "./images/header logo.jpg";
import arrow from "./images/arrow.png";
import bodylogo from "./images/logo.png";
import email from "./images/email picture.png";
import passwordIcon from "./images/password picture.png";
import on from "./images/eye-on.png";

export default function forgotPassword(){
     const onClick = () => {
    window.location.href = "https://gotrabahu.com/";
  }
  return (
    <div>
      {/* Header Section */}
      <section className="header-section_9">
        <div className="header-container_9">
          <img src={logo} alt="header Logo" className="header-logo_9" />
          <button onClick={onClick} style={{ position: 'relative', top: '10px', left: '31px' }}>
              <img src={arrow} alt = "header-arrow"/>
          </button>
        </div>
      </section>

      {/* Body Section */}
      <section className="body-section_9">
         <p className="body-text_9"> Forgotten password? Let's recover it safely. </p>
        <div className="body-container_9">
        <div className="body-rectangular_9" />
        <div className="body-rectangular2_9" />
        </div>
        <div style={{ padding: '20px' }}>
          </div>
         <div class="login-form" > </div>
         <img src={bodylogo} alt="body Logo" className="body-logo_9" />
          <div class = "email-box">
            <input type="email" placeholder="Email" className="email-input_9"/>
          </div>
          <div class = "code-box">
            <input type="code" placeholder="Enter code" className="code-input_9"/>
          </div>
          <div>
            <img src={email} alt="email" className="email-icon_9"/>
          </div>
            <p>
              <span className="email-text_9">Enter Email</span>
            </p>
          <div>
              <img src={passwordIcon} alt="password" className="password-icon_9"/>
             <input id="hs-toggle-password" type="password" className="password-input_9" placeholder="Password"/>
              <button type="button" className="password-show-hide_9" id="toggle-password-btn">
              <img src={on} className="eye-icon" alt="eye-off">
                </img>
              </button>
          </div>
          <p className="password-text">You've successfully reset your password. Please enter a new password to proceed</p>
          <div>
             <input id="hs-toggle-password" type="password" className="password-input2_9" placeholder="Confirm new password"/>
              <button type="button" className="password-show-hide2_9" id="toggle-password-btn">
              <img src={on} className="eye-icon" alt="eye-off">
                </img>
              </button>
          </div>
          <div>
            <button className="resend-code-button_9">Resend code</button>
          </div>
            <div>
            <button className="verify-code-button_9">Verify code</button>
            </div>
            <div>
            <button className="set-password-button_9">Set password</button>
            </div>

            <div>
              <ul className="code-text_9">
                We've sent you a code to your email to recover your password. If you don't see it, check your spam folder.
              </ul>
            </div>
      </section>
    </div>
  );
}

