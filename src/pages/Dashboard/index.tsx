import React from "react";

import "./Dashboard.css"
import Main from "../../components/Dashboard/Main";
import Sidebar from "../../components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard__component">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
