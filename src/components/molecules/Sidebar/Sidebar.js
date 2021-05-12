import React, { useState, useEffect } from 'react';
import { StyledSidebar } from './Sidebar.styles';
import Card from '../Ul/Card/Card';
import blogPost from '../../../data/blog.json';
import { NavLink } from 'react-router-dom';
/**
 * @author
 * @function Sidebar
 **/

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
    console.log(posts);
  });
  return (
    <StyledSidebar>
      <Card style={{ marginBottom: '20px', padding: '10px' }}>
        <div className="cardHeader">
          <span>About us</span>
        </div>
        <div className="imageContainer">
          <img src="/images/1.jpg" alt="" />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            Mam na imię Marek Barul i uczę się REACT chcę zostać FRONT-END!
          </p>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: '20px',
          padding: '20px 0',
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
        <div className="imageContainer">
          <img src="" alt="" />
        </div>
        <div className="cardBody"></div>
      </Card>
      <Card
        style={{
          marginBottom: '20px',
          padding: '20px 0',
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>
        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink to={`/post/${post.id}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn} </span>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="imageContainer">
          <img src="" alt="" />
        </div>
        <div className="cardBody"></div>
      </Card>

      <Card style={{ width: '100%' }}>Sidebar</Card>
    </StyledSidebar>
  );
};

export default Sidebar;
