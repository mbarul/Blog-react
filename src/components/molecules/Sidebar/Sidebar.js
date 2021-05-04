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
      <div className="sidebarContainer">
        <Card style={{ marginBottom: '20px' }}>
          <div className="cardHeader">
            <span>About us</span>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </Card>
        <Card style={{ marginBottom: '20px' }}>
          <div className="cardHeader">
            <span>Social Network</span>
            <div className="imageContainer">
              <img src="" alt="1.jpg" />
            </div>
          </div>
        </Card>
        <Card style={{ marginBottom: '20px' }}>
          <div className="cardHeader">
            <span>About us</span>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </Card>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
