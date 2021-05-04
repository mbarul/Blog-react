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
      <Card style={{ marginBottom: '20px' }}>
        <div className="cardHeader">
          <span>About us</span>
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
          <span>Social Network</span>
        </div>
        <div className="imageContainer">
          <img src="/images/1.jpg" alt="" />
        </div>
        <div className="cardBody"></div>
      </Card>
      <Card style={{ marginBottom: '20px' }}>
        <div className="cardHeader">
          <span>About us</span>
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
