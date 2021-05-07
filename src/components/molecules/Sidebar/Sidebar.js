import React from 'react';
import { StyledSidebar } from './Sidebar.styles';
import Card from '../Ul/Card/Card';
/**
 * @author
 * @function Sidebar
 **/

const Sidebar = (props) => {
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
          <div className="recentPost">
            <h3>Post title</h3>
            <span>July 21 </span>
          </div>
          <div className="recentPost">
            <h3>Post title</h3>
            <span>July 21 </span>
          </div>
        </div>
        <div className="imageContainer">
          <img src="" alt="" />
        </div>
        <div className="cardBody"></div>
      </Card>
    </StyledSidebar>
  );
};

export default Sidebar;
