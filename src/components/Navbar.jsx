import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/partners">Partners</NavLink>
      <NavLink to="/team">Our Team</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
