import React from 'react';
import { StyledLogo } from './Logo.styles';
/**
 * @author Marek
 * @function Logo
 **/

const Logo = (props) => {
  return (
    <StyledLogo>
      <div className="logo">
        <a href="#">Marek</a>
      </div>
    </StyledLogo>
  );
};

export default Logo;
