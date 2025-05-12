
import React, { useState, useEffect } from 'react';
import './dashboard.css';
import logo from './images/Gologo.png';
import burger from './images/burger_icon.png';
import searchIcon from './images/search.png';
import userIcon from './images/profilepicture.png';
import line from './images/line.png';
import arrowLeft from './images/arrow-left.png';
import arrowRight from './images/arrow-right.png';



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
    <div className="header-container"> 
        <div className="post-header">
          <img src = {burger} alt="Burger Icon" className="burger-img" />
          <img src={logo} alt="Logo" className="header-logo" />
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button">
              <img src={searchIcon} alt="Search Icon" className="search-img" />
            </button>
          </div>
          <div className="user-info">
            <img src={userIcon} alt="User Icon" className="user-img" />
          </div>
       </div> 
      </div>

      {/* Body Section */}
      <div className="body-container">
        {/* Side Bar Section */}
        <div className="side-bar">
          <div className="side-bar-item0">
            <span className="side-bar-text0">Posting</span>
          </div>
          <div className="side-bar-item1">
            <span className="side-bar-text1">Payment System</span>
          </div>
          <div className="side-bar-item2">
            <span className="side-bar-text2">Subscription</span>
          </div>
          <div className="side-bar-item3">
            <span className="side-bar-text3">Profile</span>
          </div>
          <div className="side-bar-item4">
            <span className="side-bar-text4">Log Out</span>
          </div>
        </div>
      </div>
      {/* Posting Section */}
        <p className="employer-text">Employeer</p>
        <div className="post-scroll">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="posting-rectangular"
                onClick={() => handlePostClick(post)}
              >
                <div className="poster-info">
                  <img src={userIcon} alt="User Icon" className="poster-img" />
                  <img src={line} className="poster-info-line" alt="highlighten" />
                  <span className="poster-name">{post.posterName || 'Unknown Poster'}</span>
                </div>
                <div className="post-description">
                  <h2 className="post-title">{post.title || 'Untitled Post'}</h2>
                  <p className="post-text">{post.summary || 'No summary available.'}</p>
                  <button className="post-arrow-box" onClick={toggleDetails}>
                    <img src={arrowRight} alt="Arrow" className="post-arrow-right" />
                  </button>
                </div>
                {showDetails && selectedPost?.id === post.id && (
                  <div className="post-all-details">
                    <p>{selectedPost.description || 'No details available.'}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className ="available-posts">No posts available.</div>
          )}
        </div>
    </div>
  );
}
