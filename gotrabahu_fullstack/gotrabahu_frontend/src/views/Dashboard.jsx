import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Gologo.png';
import burger from '../assets/images/burger_icon.png';
import searchIcon from '../assets/images/search.png';
import userIcon from '../assets/images/profilepicture.png';
import line from '../assets/images/line.png';
import arrowLeft from '../assets/images/arrow-left.png';
import arrowRight from '../assets/images/arrow-right.png';
import axiosClient from '../axiosClient';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/contextprovider';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [showDetails, setShowDetails] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setUser, setToken } = useStateContext();
  const navigate = useNavigate();

  const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};

  useEffect(() => {
    axiosClient.get('/posts')
      .then(({ data }) => setPosts(data.posts))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post('/employees/logoutEmployee')
      .then(() => {
        setUser(null);
        setToken(null);
        navigate('/');
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  };

  return (
    <div className="posting-header-container_8">
      {/* Header Section */}
      {sidebarOpen && (
        <div
            className="sidebar-overlay"
            onClick={toggleSidebar}
        ></div>
        )}
            <div className="header-container_8">
        <div className="post-header_8">
        <img src={burger} alt="Burger Icon" onClick={toggleSidebar}  className="burger-img_8" role = "button" tabIndex={0}/>
          <img src={logo} alt="Logo" className="header-logo_8" />
          <div className="search-bar_8">
            <input type="text" placeholder="Search..." className="search-input_8" />
            <button className="search-button_8">
              <img src={searchIcon} alt="Search Icon" className="search-img_8" />
            </button>
          </div>
          <div className="user-info_8">
            <img src={userIcon} alt="User Icon" className="user-img_8" />
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className="body-container_8">
        {/* Side Bar Section */}
        <div className={`side-bar_8 ${sidebarOpen ? 'side-bar-open' : ''}`}>
          <div className="side-bar-item0_8">
            <span className="side-bar-text0_8" >Posting</span>
          </div>
          <div className="side-bar-item1_8">
            <Link className="side-bar-text1_8" to="/payment" >Payment System</Link>
          </div>
          <div className="side-bar-item2_8">
            <Link className="side-bar-text2_8"to="/subscription" >Subscription</Link>
          </div>
          <div className="side-bar-item3_8">
            <Link className="side-bar-text3_8" to="/profile">Profile</Link>
          </div>
          <div className="side-bar-item4_8">
            <Link className="side-bar-text4_8" onClick={onLogout}>Log Out</Link>
          </div>
        </div>
      </div>
      {/* Posting Section */}
      <p className="employer-text_8">Employeer</p>
      <div className="post-scroll">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="posting-rectangular_8"
              onClick={() => handlePostClick(post)}
            >
              <div className="poster-info_8">
                <img src={userIcon} alt="User Icon" className="poster-img_8" />
                <img src={line} className="poster-info-line_8" alt="highlighten" />
                <span className="poster-name_8">{post.posterName || 'Unknown Poster'}</span>
              </div>
              <div className="post-description_8">
                <h2 className="post-title_8">{post.title || 'Untitled Post'}</h2>
                <p className="post-text_8">{post.summary || 'No summary available.'}</p>
                <button className="post-arrow-box_8" onClick={toggleDetails}>
                  <img src={arrowRight} alt="Arrow" className="post-arrow-right_8" />
                </button>
              </div>
              {showDetails && selectedPost?.id === post.id && (
                <div className="post-all-details_8">
                  <p>{selectedPost.description || 'No details available.'}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="available-posts_8">No posts available.</div>
        )}
      </div>
    </div>
  );
}
