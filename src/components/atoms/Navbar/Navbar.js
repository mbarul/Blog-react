import React from 'react';
import { StyledNavbar } from './Navabar.styles';
/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <div className="navbar">
        <ul className="navbarMenu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
          <li>
            <a href="#">Contant us</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <img src={require('../../../assets/icons/search.png')} alt="search" />
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
