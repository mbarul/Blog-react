import React from 'react';
import { StyledHome } from './Home.styles';
import Card from '../../components/molecules/Card/Card';
import ImageContainer from '../../components/atoms/ImageContainer/ImageContainer';

import GallaryPost from '../../components/organisms/GallaryPost/GallaryPost';
import HomeContainer from '../../components/molecules/HomeContainer/HomeContainer';
const Home = (props) => {
  return (
    <StyledHome>
      <Card>
        <GallaryPost>
          <section>
            <ImageContainer />
          </section>
          <section>
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
          </section>
        </GallaryPost>
      </Card>
      <HomeContainer />
    </StyledHome>
  );
};

export default Home;
