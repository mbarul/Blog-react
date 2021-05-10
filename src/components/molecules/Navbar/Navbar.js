import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavbar } from './Navbar.styles';
/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  const [search, setSearch] = useState(false);
  const submitSearch = (e) => {
    e.preventDefault();
    alert('Test');
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? 'searchInput active' : 'searchInput';
  return (
    <StyledNavbar>
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs">About us</NavLink>
        </li>
        <li>
          <NavLink to="/post">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contant us</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search..." />
          <button onClick={openSearch} className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
