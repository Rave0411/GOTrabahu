import React from "react";
import "./employee-profile.css";
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

function App() {

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const eyeicon = document.getElementById('eyeicon');
  const password = document.getElementById('password');

  return (
    <div>
      {/* Header Section */}
      <section className="header-section-login_7">
        <div className="top-shape-login_7"></div>
        <div className="header-container-login_6">
          <img src={logo} alt="header Logo" className="logo-signup_7" />
          
          <img src={arrow} alt = "header-arrow_7"/>
          
        </div>
        <button>
          <a className="back-button-signup_7" href="login"/>
        </button>
      </section>

      {/* Body Section */}
      <section className="container-login_7">
        <div className="body-background_7">
          <img src={Background} alt="body background" className="background-signup_7" /> 
        </div>
        <div class="green-employee-profile_7">
          <div class="Profile-Picture_7" > 
          <img src={profilePic} alt="body Logo" className="pic_7" />
          <text className="edit-profile-text_7">Edit Profile</text>
          </div>
        </div>
        <div class="grey-fade-employee_7"></div>
      
      <div class="Container_7" >
        <text className="top-text_7">Complete your profile so others can learn more about you.</text>
        <div className="White-box_7">
          <input type="text" placeholder="Last Name" className="LastName_7"/>
          <input type="text" placeholder="First Name" className="FirstName_7"/>
          <input type="text" placeholder="Middle Name" className="MiddleName_7"/>
          <input type="text" placeholder="Extension Name" className="Extension_7"/>
          <input type="text" placeholder="Gender" class="Gender_7"/>
          <input type="text" placeholder="Age" className="Age_7"/>
          <input type="text" placeholder="Date of Birth" class="DateofBirth_7"/>
          <input type="text" placeholder="Nationality" className="Nationality_7"/>
          <input type="text" placeholder="Email" className="Email_7"/>
          <input type="text" placeholder="Contact Number" className="ContactNumber_7"/>
          <div className="Division-Line1"></div>
          <input type="text" placeholder="Address" className="Address_7"/>
          <input type="text" placeholder="Province/Region" className="Province_7"/>
          <input type="text" placeholder="City" className="City_7"/>
          <input type="text" placeholder="Barangay" className="Barangay_7"/>
          <input type="text" placeholder="ZipCode" className="Zip-Code_7"/>
          <div className="Division-Line2"></div>
          <input type="text" placeholder="Emergency Contact Person" className="Emergency-contact_7"/>
          <input type="text" placeholder="Emergency Address" className="Emergency-address_7"/>
          <input type="text" placeholder="Emergency Contact Number" className="Emergency-num_7"/>
        </div>

      <div>
        <button>
          <a className="Done-button-employee" href="Dashboard">
          <text className="Done-button_7">Done</text>
          </a>
        </button>
      </div>
      </div>

         
      </section>
    </div>
  );
}

export default App;