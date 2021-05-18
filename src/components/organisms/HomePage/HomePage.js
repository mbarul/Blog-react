import React from 'react';
import { StyledHomePage } from './HomePage.styles';
import GalleryPost from '../../molecules/GalleryPost/GalleryPost';
import HomeContainer from '../../molecules/HomeContainer/HomeContainer';
/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  return (
    <StyledHomePage>
      <GalleryPost />
      <HomeContainer />
    </StyledHomePage>
  );
};

export default HomePage;
