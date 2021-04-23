import React from 'react';
import { StyledHero } from './Hero.styles';
import Card from '../Ul/Card/Card';
import Logo from '../../atoms/Logo/Logo';
import Navbar from '../../atoms/Navbar/Navbar';
/**
 * @author Marek
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div>
      <Card>
        <div style={{ padding: '50px 0' }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
  );
};

export default Hero;
