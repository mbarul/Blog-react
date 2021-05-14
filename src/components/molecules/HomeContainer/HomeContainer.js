import React from 'react';
import { StyledHomeContainer } from './HomeContainer.styles';
import Sidebar from '../Sidebar/Sidebar';
import RecentPosts from '../RecentPosts/RecentPosts';
/**
 * @author
 * @function HomeContainer
 **/

const HomeContainer = (props) => {
  return (
    <StyledHomeContainer>
      <RecentPosts style={{ width: '70%' }} />
      <Sidebar style={{ width: '30%' }} />
    </StyledHomeContainer>
  );
};

export default HomeContainer;
