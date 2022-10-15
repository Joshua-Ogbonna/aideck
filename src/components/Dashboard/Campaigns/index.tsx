import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../../../assets/data";
import Campaign from "../../Reusables/Campaign";

import "./Campaigns.css";

const Campaigns = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard__components">
      <div className="campaigns__head">
        <h5>Campaigns</h5>
        <button onClick={() => navigate("/dashboard/campaigns/add-campaign")}>Add Campaign</button>
      </div>
      <div className="campaigns">
        {data.map((campaign, idx) => (
          <Campaign campaign={campaign} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
