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
      <Card style={{ width: '100%' }}>Sidebar</Card>
    </StyledSidebar>
  );
};

export default Sidebar;
