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

export default function Dashboard() {
  const [showDetails, setShowDetails] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fixed: Added proper destructuring and used correct variable names
  const { user, token, setUser, setToken } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      fetchPosts();
    }
  }, [token, navigate]);

  // Extracted post fetching logic for better organization
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axiosClient.post("/dashboard");
      setPosts(data.posts || []);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load posts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePostClick = (post) => {
    if (selectedPost && selectedPost.id === post.id && showDetails) {
      setShowDetails(false);
      setSelectedPost(null);
    } else {
      setSelectedPost(post);
      setShowDetails(true);
    }
  };

  // Fixed logout logic with proper error handling
  const onLogout = async (ev) => {
    ev.preventDefault();

    try {
      setLoading(true);

      // Make logout request to server
      await axiosClient.post('/employees/logoutEmployee');

      // Clear user data from context
      setUser(null);
      setToken(null);

      // Clear any local storage if your app uses it
      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('USER');

      // Navigate to login page
      navigate('/loginEmployee');

    } catch (error) {
      console.error('Logout error:', error);

      // Even if server request fails, clear local data and redirect
      setUser(null);
      setToken(null);
      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('USER');
      navigate('/loginEmployee');

    } finally {
      setLoading(false);
    }
  };

  // Handle sidebar navigation
  const handleSidebarNavigation = (section) => {
    switch(section) {
      case 'posting':
        // Already on dashboard/posting page
        break;
      case 'payment':
        navigate('/payment-system');
        break;
      case 'subscription':
        navigate('/subscription');
        break;
      case 'profile':
        navigate('/profile');
        break;
      default:
        break;
    }
  };

  return (
    <div className="app-layout">
      <header>
        <div className="header-container_8">
          <div className="post-header_8">
            <div className="logo-section">
              <img src={burger} alt="Menu" className="burger-icon" />
              <img src={logo} alt="Logo" className="logo" />
            </div>

            <div className="search-bar_8">
              <input
                type="text"
                placeholder="Search..."
                className="search-input_8"
              />
              <button className="search-button_8">
                <img src={searchIcon} alt="Search" className="search-icon" />
              </button>
            </div>

            <div className="user-info_8">
              <img src={userIcon} alt="User" className="user-icon" />
              {user && <span className="user-name">{user.name}</span>}
            </div>
          </div>
        </div>
      </header>

      <aside>
        <div className="side-bar">
          <div className="side-bar-item0">
            <button
              className="side-bar-text0"
              onClick={() => handleSidebarNavigation('posting')}
            >
              Posting
            </button>
          </div>
          <div className="side-bar-item1">
            <button
              className="side-bar-text1"
              onClick={() => handleSidebarNavigation('payment')}
            >
              Payment System
            </button>
          </div>
          <div className="side-bar-item2">
            <button
              className="side-bar-text2"
              onClick={() => handleSidebarNavigation('subscription')}
            >
              Subscription
            </button>
          </div>
          <div className="side-bar-item3">
            <button
              className="side-bar-text3"
              onClick={() => handleSidebarNavigation('profile')}
            >
              Profile
            </button>
          </div>
          <div className="side-bar-item4">
            <button
              className="side-bar-text4"
              onClick={onLogout}
              disabled={loading}
            >
              {loading ? 'Logging out...' : 'Log Out'}
            </button>
          </div>
        </div>
      </aside>

      <main>
        <div className="body-container_8">
          <p className="employer-text_8">Employer</p>

          {error && (
            <div className="error-message" style={{ color: 'red', marginBottom: '20px' }}>
              {error}
            </div>
          )}

          {loading && !posts.length && (
            <div className="loading-message">Loading posts...</div>
          )}

          <div className="post-scroll_8">
            {posts.length > 0 ? (
              <ul style={{ padding: 0, margin: 0 }}>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="posting-rectangular_8"
                    onClick={() => handlePostClick(post)}
                    style={{
                      listStyle: 'none',
                      marginBottom: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div className="poster-info_8">
                      <img src={userIcon} alt="User Icon" className="poster-img_8" />
                      <img src={line} className="poster-info-line_8" alt="divider" />
                      <span className="poster-name_8">
                        {post.posterName || post.company_name || 'Unknown Poster'}
                      </span>
                    </div>

                    <div className="post-description_8">
                      <h2 className="post-title_8">{post.title || 'Untitled Post'}</h2>
                      <p className="post-text_8">{post.summary || post.description || 'No summary available.'}</p>

                      <button
                        className="post-arrow-box_8"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePostClick(post);
                        }}
                        aria-label={showDetails && selectedPost?.id === post.id ? "Hide details" : "Show details"}
                      >
                        <img
                          src={showDetails && selectedPost?.id === post.id ? arrowLeft : arrowRight}
                          alt="Toggle details"
                          className="post-arrow_8"
                        />
                      </button>
                    </div>

                    {showDetails && selectedPost?.id === post.id && (
                      <div className="post-all-details_8" style={{
                        marginTop: '15px',
                        padding: '15px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        borderTop: '1px solid #e9ecef'
                      }}>
                        <h3>Job Details</h3>
                        <p><strong>Description:</strong> {selectedPost.description || 'No detailed description available.'}</p>
                        {selectedPost.requirements && (
                          <p><strong>Requirements:</strong> {selectedPost.requirements}</p>
                        )}
                        {selectedPost.salary && (
                          <p><strong>Salary:</strong> {selectedPost.salary}</p>
                        )}
                        {selectedPost.location && (
                          <p><strong>Location:</strong> {selectedPost.location}</p>
                        )}
                        {selectedPost.posted_date && (
                          <p><strong>Posted:</strong> {new Date(selectedPost.posted_date).toLocaleDateString()}</p>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              !loading && (
                <div className="available-posts_8" style={{
                  textAlign: 'center',
                  padding: '40px',
                  color: '#6c757d'
                }}>
                  No posts available.
                  <br />
                  <button
                    onClick={fetchPosts}
                    style={{
                      marginTop: '10px',
                      padding: '8px 16px',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Refresh
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
