import React from "react";
import "./profile.css";
import logo from "./images/header logo.jpg";
import arrow from "./images/Arrow.png";
import bodylogo from "./images/Gologo.png";
import email from "./images/email picture.png";
import passwordIcon from "./images/password picture.png";
import off from "./images/eye-off.png";
import on from "./images/eye-on.png";
import { useState } from "react"
import Background from "./images/background.png";
import profilePic from "./images/profilepic.jpg";

export default function App() {

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const eyeicon = document.getElementById('eyeicon');
  const password = document.getElementById('password');

  return (
    <div>
      {/* Header Section */}
      <section className="header-section-editprofile">
        <div className="top-shape-editprofile"></div>
        <div className="header-container-editprofile">
          <img src={logo} alt="header Logo" className="logo-editprofile" />
          
          <img src={arrow} alt = "header-arrow-editprofile"/>
          
        </div>
        <button>
          <a className="back-button-editprofile" href="login"/>
        </button>
      </section>

      {/* Body Section */}
      <section className="container-editprofile">
        <div className="body-background-editprofile">
          <img src={Background} alt="body background" className="background-editprofile" /> 
        </div>
        <div class="green-employee-editprofile">
          <div class="Profile-Picture" > 
          <img src={profilePic} alt="body Logo" className="pic" />
          <text className="edit-profile-text">Edit Profile</text>
          </div>
        </div>
        <div class="grey-fade-editprofile"></div>
      
      <div class="Container-editprofile" >
        <text className="top-text-01">Complete your profile so others can learn more about you.</text>
        <div className="White-box-01">
          <input type="text" placeholder="Last Name" className="LastName-01"/>
          <input type="text" placeholder="First Name" className="FirstName-01"/>
          <input type="text" placeholder="Middle Name" className="MiddleName-01"/>
          <input type="text" placeholder="Extension Name" className="Extension-01"/>
          <input type="text" placeholder="Gender" class="Gender-01"/>
          <input type="text" placeholder="Age" className="Age-01"/>
          <input type="text" placeholder="Date of Birth" class="DateofBirth-01"/>
          <input type="text" placeholder="Nationality" className="Nationality-01"/>
          <input type="text" placeholder="Email" className="Email-01"/>
          <input type="text" placeholder="Contact Number" className="ContactNumber-01"/>
          <div className="Division-Line1"></div>
          <input type="text" placeholder="Address" className="Address-01"/>
          <input type="text" placeholder="Province/Region" className="Province-01"/>
          <input type="text" placeholder="City" className="City-01"/>
          <input type="text" placeholder="Barangay" className="Barangay-01"/>
          <input type="text" placeholder="ZipCode" className="Zip-Code-01"/>
          <div className="Division-Line2"></div>
          <input type="text" placeholder="Emergency Contact Person" className="Emergency-contact-01"/>
          <input type="text" placeholder="Emergency Address" className="Emergency-address-01"/>
          <input type="text" placeholder="Emergency Contact Number" className="Emergency-num-01"/>
        </div>

      <div>
        <button>
          <text className="Done-button-01">Done</text>
        </button>
      </div>
      </div>

         
      </section>
    </div>
  );
}
