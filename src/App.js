import React from "react";
import "./App.css";
import logo from "./images/Gologo.png";
import background from "./images/backgroundpic.png";
import abouticon from "./images/abouticon.png";
import GOTrabahu from "./images/GOTrabahu.png";
import iIcon from "./images/abouticon.png";


function LandingPage() {
  return (
    <div className="header">
      {/* Header Section */}
      <div className="header-container">
        <div className="login-button"></div>
        <div className="signup-button"></div>
        <div className="login-text">Login</div>
        <div className="signup-text">Signup</div>
        <div className="about-icon">About</div>
        <div src={abouticon} alt={"iIcon"} className="i-icon"></div>
      </div>

      {/* Hero Section */}
      <div className="hero-section"></div>
      <div className="hero-title">Linking talent to opportunity, turning ambition into reality.
      <img src={logo} alt="GOTrabahu Logo" className="hero-logo" />
      </div>
      <div className="hero-section"></div>
      <div className="background-create"></div>
      <div className="create-icon">Create</div>
      <div className="background-find"></div>
      <div className="find-icon">Find</div>
      <div className="background-apply"></div>
      <div className="apply-icon">Apply</div>

      {/* About Section */}
      <div className="about-background"></div>
      <div className="large-circular"></div>
      <div className="smaller-circular"></div>
      <div className="circular"></div>
      <div className="white-circular"></div>
      <div className="small-rotated-rectangle"></div>
      <div className="title-text">WHAT IS</div>
      <div className="GOT-backbox"></div>
      <div className="GoTrabahu-logo">?</div>
      <div className="description-text">
        <p>At GOTrabahu, we connect workers and employers in a seamless and efficient way. Our 
        platform allows individuals to browse job postings, just like scrolling through social 
        media and making job searching simple and engaging.</p>

        <p>Whether you're looking for work or need to hire skilled workers, we make the process 
        easy. With our built-in transaction system, securing a job or hiring the right person 
        has never been safer and more convenient.</p>

        <p>Our mission is to empower workers by giving them direct access to job opportunities 
        while helping businesses and individuals find the right talent. Join us today and 
        take the next step in your career or hiring journey!</p>
      </div>

      {/* Categories Section */}
      <div className="categories-background">
      <div className="categories-background-2"></div>
      <div className="categories-title">CATEGORIES</div>
      <div className="employee-card"></div>
      <div className="employee-title">Be an Employee</div>
      <div className="employee-description-text">
            Find job opportunities that match your skills! 
            Post your profile and connect with employers 
            looking for talent like you.
      </div>
      <div className="employee-button-background"></div>
      <div className="employee-button-register">Register Now</div>
      <div className="employer-card"></div>
      <div className="employer-text">Be an Employer</div>
      <div className="employer-description-text">
      Looking for skilled workers? Post job listings and 
      discover qualified employees ready to be hired 
      for your needs.
      </div>
      <div className="employer-button-background"></div>
      <div className="employer-button-register">Register Now</div>
      <div className="small-decorative"></div>
    </div> 
       
       

      {/* Footer Section */}
      <div className="footer-background"></div>
      <div className="footer-text">
        &copy; 2025 GOTrabahu. All rights reserved.
      </div>
    </div>
  );
}

export default LandingPage;