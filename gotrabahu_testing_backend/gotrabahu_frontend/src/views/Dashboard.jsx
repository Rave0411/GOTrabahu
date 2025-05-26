import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Gologo.png';
import burger from '../assets/images/burger_icon.png';
import searchIcon from '../assets/images/search.png';
import userIcon from '../assets/images/profilepicture.png';
import line from '../assets/images/line.png';
import arrowLeft from '../assets/images/arrow-left.png';
import arrowRight from '../assets/images/arrow-right.png';
import {useNavigate} from 'react-router-dom';



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
  <div className="posting-header-container_8">
      {/* Body Section */}
      <div className="body-container_8">
      </div>
      {/* Posting Section */}
        <p className="employer-text_8">Employeer</p>
        <div className="post-scroll_8">
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
            <div className ="available-posts_8">No posts available.</div>
          )}
        </div>
    </div>
  );
}
