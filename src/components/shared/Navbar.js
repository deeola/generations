import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <ul>
        <li>
        <NavLink className="myLink"  to="/">
          Home
        </NavLink>
        </li>
        <li>
        <NavLink className="myLink"  to="/about">
          About Us
        </NavLink>
        </li>
        <li>
        <NavLink className="myLink"  to="/shop">
          Shop
        </NavLink>
        </li>
        <li>
        <NavLink className="myLink"  to="/contact">
          Contact Us
        </NavLink>
        </li>
        <li>
        <NavLink className="myLink"  to="/showcase">
          Showcase
          
        </NavLink>
        </li>
      </ul>

      
      <NavLink className='register'   to="/Login">
        Login
      </NavLink>
    
      <div className="hamburger">
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </div>
    </nav>
  );
};

export default Navbar;
