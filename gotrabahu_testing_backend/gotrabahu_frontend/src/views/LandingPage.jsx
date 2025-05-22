import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/images/Gologo.png";
import iIcon from "../assets/images/abouticon.png";
import arrowIcon from "../assets/images/Arrow.png";
import createIcon from "../assets/images/blackIcon.png";
import joinIcon from "../assets/images/joinIcon.png";
import findIcon from "../assets/images/magnifyingIcon.png";
import applyIcon from "../assets/images/checkIcon.png";
import fadebackground from "../assets/images/greenfade.png";
import { useStateContext } from "../contexts/contextprovider.jsx";


export default function LandingPage() {

        const scrollToCategories = () => {
        const categoriesSection = document.getElementById("categories-section");
        if (categoriesSection) {
            categoriesSection.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
    <div id="landingpage">
    <div className="header">
      <div className="header-container-landing">
        <button>
        <Link className="login-button-landing" to="/login">Login</Link>
        </button>
        <div>
            <button onClick={scrollToCategories} className="signup-button-landing">Sign Up</button>
        </div>
        <div className="about-text-landing">About us</div>
        <div className="about-icon-landing">
          <img src={iIcon} alt="I-icon" className="about-icon" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section-landing"></div>
      <div className="hero-title">Linking talent to opportunity, turning ambition into reality.</div>
      <img src={logo} alt="GOTrabahu Logo" className="header-logo-landing" />
      <div className="background-section-landing"></div>
      <div className="background-create"></div>
      <div className="create-text">Create</div>
      <div className="background-find"></div>
      <div className="find-text">Find</div>
      <div className="background-apply"></div>
      <div className="apply-text">Apply</div>

      {/* About Section */}
      <div className="about-background"></div>
      <div className="magnifying">
        <div className="large-circular"></div>
        <div className="smaller-circular"></div>
        <div className="circular"></div>
        <div className="white-circular"></div>
        <div className="small-rotated-rectangle"></div>
        <div className="rectangular-hand"></div>
      </div>
      <div className="title-text">WHAT IS</div>
      <div className="GOT-backbox"></div>
      <div className="GoTrabahu-logo"></div>
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
      <div id="categories-section" className="categories-background">
      <div className="categories-greenfade-background">
        <img src={fadebackground} alt="Fade Background" className="fade-background" />
      </div>
      <div className="categories-title">CATEGORIES</div>
      <div className="employee-card"></div>
      <div className="employee-title">Be an Employee</div>
      <div className="employee-description-text">
            Find job opportunities that match your skills!
            Post your profile and connect with employers
            looking for talent like you.
      </div>
      <div className="employee-button-landingpage">
        <button >
          <Link className="employee-button-background" to="/signup">
            <text className="employee-button-text">Register Now</text>
            <div className="employee-arrow-button">
            <img src={arrowIcon} alt="Arrow Icon" className="arrow-employee" />
            </div>
          </Link>
        </button>
      </div>
      <div className="employer-card"></div>
      <div className="employer-text">Be an Employer</div>
      <div className="employer-description-text">
      Looking for skilled workers? Post job listings and
      discover qualified employees ready to be hired
      for your needs.
      </div>
      <div className="employer-buttons-landingpage">
        <button>
        <Link className="employer-button-background" to="/signupemployer">
          <text className="employer-button-text">Register Now</text>
          <div className="employer-arrow-button">
          <img src={arrowIcon} alt="Arrow Icon" className="arrow-employer" />
          </div>
        </Link>

        </button>
      </div>
      <div className="small-decorative"></div>
      <div className="work-text">HOW DOES IT WORK
        <div className="work-background1">
          <img src={createIcon} alt="Create Icon" className="create-icon" />
          <div className="textcreate">Create Account</div>
        </div>
        <div className="work-background2">
          <img src={joinIcon} alt="Join Icon" className="join-icon" />
          <div className="textjoin">Join as an Employee or Employer</div>
        </div>
        <div className="work-back3">
          <img src={findIcon} alt="Find Icon" className="find-icon" />
          <div className="textfind">Find Employer / Employees</div>
        </div>
        <div className="work-back4">
          <img src={applyIcon} alt="Apply Icon" className="apply-icon" />
          <div className="textapply">Apply/Hire</div>
        </div>
      </div>
    </div>



      {/* Footer Section */}
      <div className="footer-background">
        <div className="GoTrabahu-footer-text">GOTrabahu</div>
        <div className="call-us-text">Call us:</div>
        <div className="phone-number">0951-798-0277</div>
        <div className="location">Cagayan de Oro City</div>
        <div className="aboutus">About Us</div>
        <div className="contact-text">Contact</div>
        <div className="visit-text">Visit our Facebook page</div>
        <div className="email-text-landing">Email us: gotrabahu@gmail.com</div>
        <div className="vertical-line"></div>
        <div className="footer-logo-background"></div>
        <img src={logo} alt="GOTrabahu Logo" className="footer-logo" />
       </div>
      <div className="footer-greenback"></div>
      <div className="footer-text">
        &copy; All rights reserved 2025. GOTrabahu
      </div>
    </div>
        <Outlet/>
    </div>
  );


}
