import React from 'react';
import { StyledHeader } from './Header.styles';
import SocialMedia from '../../atoms/SocialMedia/SocialMedia';
/**
 * @author Marek
 * @function Header
 **/

const Header = (props) => {
  return (
    <StyledHeader>
      <nav className="headerMenu"></nav>
      <SocialMedia />
    </StyledHeader>
  );
};

export default Header;
