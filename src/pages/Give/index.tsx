import React from "react";

import "./Give.css"
import Nav from "../../components/Navigation/Nav";
import { allCampaigns } from "../../assets/data";
import Campaign from "../../components/Reusables/Campaign";
import AllC from "../../components/Reusables/AllC";
import Footer from "../../components/Footer";



const Give = () => {
  return (
    <div className="give__components">
      <Nav />
      <div className="campaigns__section">
        <h5>All Campaigns</h5>
        <div className="campaigns">
            {(allCampaigns || []).map((campaign, idx) => (
                <AllC campaign={campaign} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Give;
