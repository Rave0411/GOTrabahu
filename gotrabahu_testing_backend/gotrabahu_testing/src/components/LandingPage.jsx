import { useStateContext } from "../contexts/contextprovider.jsx";
import { Navigate, Outlet } from "react-router-dom";
import logo from '../assets/logo.png';
import abouticon from '../assets/abouticon.png';
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

export default function LandingPage(){
    const {token} = useStateContext();
    if(token){
       return <Navigate to='/'/>
    }

    return(
        <div>
           <div className="header_0">
                 {/* Header Section */}
                 <div className="header-container_0">
                   <div className="login-button_0"></div>
                   <div className="signup-button_0"></div>
                   <div className="login-text_0">Login</div>
                   <div className="signup-text_0">Signup</div>
                   <div className="about-icon_0">About</div>
                   <img src={abouticon} alt={"iIcon"} className="i-icon_0"/>
                 </div>

                 {/* Hero Section */}
                 <div className="hero-section_0"></div>
                 <div className="hero-title_0">Linking talent to opportunity, turning ambition into reality.
                 <img src={logo} alt="GOTrabahu Logo" className="hero-logo_0" />
                 </div>
                 <div className="hero-section_0"></div>
                 <div className="background-create_0"></div>
                 <div className="create-icon_0">Create</div>
                 <div className="background-find_0"></div>
                 <div className="find-icon_0">Find</div>
                 <div className="background-apply_0"></div>
                 <div className="apply-icon_0">Apply</div>

                 {/* About Section */}
                 <div className="about-background_0"></div>
                 <div className="large-circular_0"></div>
                 <div className="smaller-circular_0"></div>
                 <div className="circular_0"></div>
                 <div className="white-circular_0"></div>
                 <div className="small-rotated-rectangle_0"></div>
                 <div className="title-text_0">WHAT IS</div>
                 <div className="GOT-backbox_0"></div>
                 <div className="GoTrabahu-logo_0">?</div>
                 <div className="description-text_0">
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
                 <div className="categories-background_0">
                 <div className="categories-background-2_0"></div>
                 <div className="categories-title_0">CATEGORIES</div>
                 <div className="employee-card_0"></div>
                 <div className="employee-title_0">Be an Employee</div>
                 <div className="employee-description-text_0">
                       Find job opportunities that match your skills!
                       Post your profile and connect with employers
                       looking for talent like you.
                 </div>
                 <div className="employee-button-background_0"></div>
                 <div className="employee-button-register_0">Register Now</div>
                 <div className="employer-card_0"></div>
                 <div className="employer-text_0">Be an Employer</div>
                 <div className="employer-description-text_0">
                 Looking for skilled workers? Post job listings and
                 discover qualified employees ready to be hired
                 for your needs.
                 </div>
                 <div className="employer-button-background_0"></div>
                 <div className="employer-button-register_0">Register Now</div>
                 <div className="small-decorative_0"></div>
               </div>



                 {/* Footer Section */}
                 <div className="footer-background_0"></div>
                 <div className="footer-text_0">
                   &copy; 2025 GOTrabahu. All rights reserved.
                 </div>
               </div>
            <Outlet />
        </div>
    )
}
