import React from 'react';
import { StyledHome } from './Home.styles';
import HomePage from '../../components/organisms/HomePage/HomePage';

const Home = (props) => {
  return (
    <StyledHome>
      <HomePage />
    </StyledHome>
  );
};

export default Home;
