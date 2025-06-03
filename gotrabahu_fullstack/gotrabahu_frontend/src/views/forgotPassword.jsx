import React, { useState } from "react";
import logo from "../assets/images/header logo.jpg";
import arrow from "../assets/images/arrow.png";
import bodylogo from "../assets/images/Gologo.png";
import emailIcon from "../assets/images/email picture.png";
import passwordIcon from "../assets/images/password picture.png";
import on from "../assets/images/eye-on.png";
import axiosClient from "../axiosClient";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1); // 1: enter email, 2: verify code, 3: reset password
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onClickBack = () => {
    window.location.href = "https://gotrabahu.com/";
  };

  const handleRequestReset = async () => {
    setError("");
    setMessage("");
    try {
      await axiosClient.post("/employees/requestPasswordReset", { email });
      setMessage("Password reset code sent to your email.");
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send reset code.");
    }
  };

  const handleVerifyCode = async () => {
    setError("");
    setMessage("");
    try {
      await axiosClient.post("/employees/verifyResetCode", { email, token: code });
      setMessage("Code verified. Please set your new password.");
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid or expired code.");
    }
  };

  const handleResetPassword = async () => {
    setError("");
    setMessage("");
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await axiosClient.post("/employees/resetPassword", {
        email,
        token: code,
        password,
        password_confirmation: confirmPassword,
      });
      setMessage("Password has been reset successfully.");
      setStep(1);
      setEmail("");
      setCode("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password.");
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="header-section_9">
        <div className="header-container_9">
          <img src={logo} alt="header Logo" className="header-logo_9" />
          <button onClick={onClickBack} style={{ position: "relative", top: "10px", left: "31px" }}>
            <img src={arrow} alt="header-arrow" />
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
        <div style={{ padding: "20px" }}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}
        </div>

        <img src={bodylogo} alt="body Logo" className="body-logo_9" />

        {step === 1 && (
          <div className="email-box">
            <input
              type="email"
              placeholder="Email"
              className="email-input_9"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="resend-code-button_9" onClick={handleRequestReset}>
              Send Reset Code
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="code-box">
            <input
              type="text"
              placeholder="Enter code"
              className="code-input_9"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button className="verify-code-button_9" onClick={handleVerifyCode}>
              Verify code
            </button>
          </div>
        )}

        {step === 3 && (
          <>
            <div>
              <img src={passwordIcon} alt="password" className="password-icon_9" />
              <input
                id="hs-toggle-password"
                type={showPassword ? "text" : "password"}
                className="password-input_9"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-show-hide_9"
                id="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={on} className="eye-icon" alt="eye-off" />
              </button>
            </div>
            <div>
              <input
                id="hs-toggle-password"
                type={showConfirmPassword ? "text" : "password"}
                className="password-input2_9"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-show-hide2_9"
                id="toggle-password-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <img src={on} className="eye-icon" alt="eye-off" />
              </button>
            </div>
            <button className="set-password-button_9" onClick={handleResetPassword}>
              Set password
            </button>
          </>
        )}
      </section>
    </div>
  );
}
