import React from 'react';
import { StyledHomePage } from './HomePage.styles';
import GallaryPost from '../../molecules/GallaryPost/GallaryPost';
import HomeContainer from '../../molecules/HomeContainer/HomeContainer';
/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  return (
    <StyledHomePage>
      <GallaryPost />
      <HomeContainer />
    </StyledHomePage>
  );
};

export default HomePage;
