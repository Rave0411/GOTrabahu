
import React, { useState, useEffect } from 'react';
import './dashboard.css';
import logo from './images/GOTrabahu.png';
import burger from './images/burger_icon.png';
import searchIcon from './images/search.png';
import userIcon from './images/profilepicture.png';
import line from './images/line.png';
import arrowLeft from './images/arrow-left.png';
import arrowRight from './images/arrow-right.png';
import background from './images/backgroundpic.png';
import { Link } from 'react-router-dom';
import Payment from './payment';



export default function Posting() {
  const [showDetails, setShowDetails] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Fetch posts from the database
    fetch('/api/posts') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="posting-header-container">
      {/* Header Section */}
      <div className="header-dashboard">
        <div className="post-header">
          <img src={burger} alt="Burger Icon" className="burger-img" />
          <img src={logo} alt="Logo" className="header-logo-dashboard" />
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input-dashboard" />
            
              <img src={searchIcon} alt="Search Icon" className="search-img"role='button' />
          
          </div>
          <div className="user-info">
            <img src={userIcon} alt="User Icon" className="user-img" />
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className="body-container-dashboard">
        <div className="body-background-dashboard">
          <img src={background} alt="Background Line" className="background-image-dashboard" />
        </div>
      </div>

      {/* Side Bar Section */}
      <div className="side-transparent-bar">
        <div className="side-bar-item0">
          <Link className="side-bar-text0" to="/Dashboard">Posting</Link>
        </div>
        <div className="side-bar-item1">
          <Link className="side-bar-text1" to="/Payment" >Payment System</Link>
        </div>
        <div className="side-bar-item2">
          <Link className="side-bar-text2" to="/Subsciption">Subscription</Link>
        </div>
        <div className="side-bar-item3">
          <Link className="side-bar-text3" to="/Profile">Profile</Link>
        </div>
        <div className="side-bar-item4">
          <Link className="side-bar-text4" to="/Log Out">Log Out</Link>
        </div>
      </div>

    </div>
  );
}
