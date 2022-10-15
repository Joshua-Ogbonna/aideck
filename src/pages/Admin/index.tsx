import React from "react";

import "./Admin.css";
import { Link, Outlet } from "react-router-dom";

import Nav from "../../components/Navigation/Nav";

const Admin = () => {
  return (
    <div>
      <Nav />
      <div className="admin__components">
        <div className="tabs">
          <div>
            <Link to="/admin">Missionary Applications</Link>
          </div>
          <div>
            <Link to="/admin/fundings">Funding Applications</Link>
          </div>
          <div>
            <Link to="/admin/withdrawal">Withdrawal Applications</Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
