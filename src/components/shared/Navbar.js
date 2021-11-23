import React, { Fragment, useContext } from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.username}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavLink className="register" to="/Login">
        Login
      </NavLink>
      <NavLink className="register" to="/Register">
        Register
      </NavLink>
    </Fragment>
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <ul>
        <li>
          <NavLink className="myLink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="myLink" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="myLink" to="/shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className="myLink" to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink className="myLink" to="/showcase">
            Showcase
          </NavLink>
        </li>
      </ul>

      {isAuthenticated ? authLinks : guestLinks}

      <div className="hamburger">
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </div>
    </nav>
  );
};

export default Navbar;
