
import React, { useState, useEffect } from 'react';
import './subscription.css';
import logo from './images/GOTrabahu.png';
import burger from './images/burger_icon.png';
import searchIcon from './images/search.png';
import userIcon from './images/profilepicture.png';
import line from './images/line.png';
import arrowLeft from './images/arrow-left.png';
import arrowRight from './images/arrow-right.png';
import background from './images/backgroundpic.png';
import { Link } from 'react-router-dom';



export default function Payment() {
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
    <div className="body-container-subs">
      {/* Header Section */}
      <div className="header-subs">
        <div className="payment-header">
          <img src={burger} alt="Burger Icon" className="burger-img-subs" />
          <img src={logo} alt="Logo" className="header-logo-payment" />
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input-subs" />
            <button className="search-button-payment">
              <img src={searchIcon} alt="Search Icon" className="search-img-subs" />
            </button>
          </div>
          <div className="user-info-subs">
            <img src={userIcon} alt="User Icon" className="user-img-subs" />
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className="body-container-subs">
        <div className="body-background-subs">
          <img src={background} alt="Background Line" className="background-image-subs" />
        </div>
      </div>

      {/* Side Bar Section */}
      <div className="side-transparent-barsubs">
        <div className="side-bar-item1">
          <Link className="side-bar-text0" to="/dashboard">Posting</Link>
        </div>
        <div className="side-bar-item1">
          <Link className="side-bar-text1" to="/payment">Payment System</Link>
        </div>
        <div className="side-bar-item2">
          <Link className="side-bar-text2" to="/Subscription">Subscription</Link>
        </div>
        <div className="side-bar-item3">
          <Link className="side-bar-text3" to="/profile">Profile</Link>
        </div>
        <div className="side-bar-item4">
          <Link className="side-bar-text4" to="/logout">Log Out</Link>
        </div>
      </div>

    </div>
  );
}
