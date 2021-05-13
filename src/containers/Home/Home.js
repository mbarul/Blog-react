import React from 'react';
import { StyledHome } from './Home.styles';
import Card from '../../components/molecules/Ul/Card/Card';
import Sidebar from '../../components/molecules/Sidebar/Sidebar';
import RecentPosts from '../../components/molecules/RecentPosts/RecentPosts';
const Home = (props) => {
  return (
    <StyledHome>
      <Card>
        <div className="gallaryPost">
          <section>
            <div className="mainImageContainer">
              <img src="/images/porto.jpg" alt=""></img>
            </div>
          </section>
          <section>
            <div className="secondImageContainer">
              <img src="/images/porto.jpg" alt=""></img>
            </div>
            <div className="secondImageContainer">
              <img src="/images/porto.jpg" alt=""></img>
            </div>
            <div className="secondImageContainer">
              <img src="/images/porto.jpg" alt=""></img>
            </div>
          </section>
        </div>
      </Card>
      <div className="homeContainer">
        <RecentPosts style={{ width: '100%' }} />
        <Sidebar style={{ width: '40%', color: 'red' }} />
      </div>
    </StyledHome>
  );
};

export default Home;
