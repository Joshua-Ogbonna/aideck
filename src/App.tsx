import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Fundings from "./components/Admin/Fundings";
import MissionaryApplications from "./components/Admin/MissionaryApplications";
import MissionaryAccount from "./components/Auth/MissionaryAccount";
import UserAccount from "./components/Auth/UserAccount";
import Campaigns from "./components/Dashboard/Campaigns";
import AddCampaign from "./components/Dashboard/Campaigns/AddCampaign";
import DashboardIndex from "./components/Dashboard/DashMain/Index";
import Settings from "./components/Dashboard/Settings";
import Admin from "./pages/Admin";
import EntryAuth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Give from "./pages/Give";
import SingleCampaign from "./pages/Give/SingleCampaign";
import Home from "./pages/Home";
import { AdminRoute, PrivateRoute, PublicRoute } from "./pages/ProtectRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="/auth" element={<EntryAuth />} />
            <Route path="/auth/user" element={<UserAccount />} />
            <Route path="/auth/missionary" element={<MissionaryAccount />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* Dashboard */}
          <Route element={<PrivateRoute />}>
            <Route path="/campaigns" element={<Give />} />
            <Route path="/campaigns/:id" element={<SingleCampaign />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<DashboardIndex />} />
              <Route path="campaigns" element={<Campaigns />} />
              <Route path="campaigns/add-campaign" element={<AddCampaign />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          {/* Admin Dashboard */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<Admin />}>
              <Route path="" element={<MissionaryApplications />} />
              <Route path="fundings" element={<Fundings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
