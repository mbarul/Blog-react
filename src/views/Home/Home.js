import React from 'react';
import { StyledHome } from './Home.styles';
import Card from '../../components/molecules/Card/Card';
import GallaryPost from '../../components/molecules/GallaryPost/GallaryPost';
import HomeContainer from '../../components/molecules/HomeContainer/HomeContainer';

const Home = (props) => {
  return (
    <StyledHome>
      <Card>
        <GallaryPost />
      </Card>
      <HomeContainer />
    </StyledHome>
  );
};

export default Home;
