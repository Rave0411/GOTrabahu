import React, { useState } from 'react';
import './App.css';
import logo from './images/gotrabahu_logo.png';
import burgerIcon from './images/burger_icon.png';
import searchIcon from './images/search.png';

function App() {
  const [userProfilePicture, setUserProfilePicture] = useState('./images/profilepicture.png');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="header-container">
      <button className="burger-menu" onClick={toggleSidebar}>
        <img src={burgerIcon} alt="Menu" className="burger-icon" />
      </button>
      <img src={logo} className="header-logo" alt="logo" />
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">
          <img src={searchIcon} alt="Search" className="button-icon" />
        </button>
      </div>
      <div className="profile-picture">
        <img src={userProfilePicture} alt="Profile" className="profile-icon" />
        <input
          type="file"
          accept="image/*"
          className="profile-upload"
          onChange={handleProfilePictureChange}
        />
      </div>
    </div>
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <ul className="sidebar-menu">
        <li>Home</li>
        <li>Payment History</li>
        <li>Subscription Plan</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default App;
