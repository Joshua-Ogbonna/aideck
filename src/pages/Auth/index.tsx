import React from "react";
import { useNavigate } from "react-router-dom";

import "./Auth.css";
import Nav from "../../components/Navigation/Nav";

const EntryAuth = () => {
  const navigate = useNavigate();
  return (
    <div className="auth__component">
      <Nav />
      <div className="choice">
        <div onClick={() => navigate("/auth/user")}>
          <i className="bx bxs-user-circle"></i>
          User Account
        </div>
        <div onClick={() => navigate("/auth/missionary")}>
          <i className="bx bxs-user-badge"></i>
          Missionary
        </div>
      </div>
    </div>
  );
};

export default EntryAuth;
