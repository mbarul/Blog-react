import React from 'react';
import { StyledHeader } from './Header.styles';
/**
 * @author Marek
 * @function Header
 **/

const Header = (props) => {
  return (
    <StyledHeader>
      <header className="header">
        <nav className="headerMenu">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Shop</a>
        </nav>
        <div>Social Media Links</div>
      </header>
    </StyledHeader>
  );
};

export default Header;
