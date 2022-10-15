import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

import { user } from "../../assets/data";
console.log(user);

const Nav = () => {
  const [textColor, setColor] = useState("#003780");

  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div className="nav__component">
      <div className="brand">
        <Link to="/">
          <img src="/images/logo.jpg" alt="brand" />
        </Link>
      </div>
      <ul className="links">
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        {user.role && (
          <li>
            <Link to="/campaigns">Give</Link>
          </li>
        )}
        {!user.role && (
          <li>
            <Link to="/auth">Sign Up</Link>
          </li>
        )}
        {!user.role && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user.role && user.role === "missionary" && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
        {user.role && (
          <li onClick={logout}>
            <Link to="">Logout</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
