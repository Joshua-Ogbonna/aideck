import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const splitPath = pathname.split("/");

  return (
    <div className="sidebar__component">
      <div className="sidebar__brand">
        <Link to="/">
          <img src="/images/logo.jpg" alt="brand avatar" />
        </Link>
      </div>
      <ul className="sidebar__links">
        <li className={splitPath[1] === "dashboard" && !splitPath[2] ? "active__link" : ""}>
          <Link to="/dashboard">
            <i className="bx bxs-dashboard"></i> Dashboard
          </Link>
        </li>
        <li className={splitPath[2] === "campaigns" ? "active__link" : ""}>
          <Link to="/dashboard/campaigns">
            <i className="bx bxs-megaphone"></i> Campaigns
          </Link>
        </li>
        <li className={splitPath[2] === "settings" ? "active__link" : ""}>
          <Link to="/dashboard/settings">
            <i className="bx bx-cog"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
