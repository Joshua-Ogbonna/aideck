import React from "react";
import { Link } from "react-router-dom";
import { dateFormatter, getPercentDone } from "../../helpers";

const AllC = ({ campaign }: { campaign: any }) => {
  return (
    <Link to={`/campaigns/${campaign.id}`}>
      <div className="campaign">
        <div className="campaign__head">
          {/* <img src={campaign.dp} alt={campaign.title} /> */}
          <div>
            <h5>{campaign.title}</h5>
            <p>{dateFormatter(campaign.datePosted)}</p>
          </div>
        </div>
        <div className="lines">
          <hr
            style={{
              width: `${getPercentDone(
                campaign.target,
                campaign.amountRaised
              )}%`,
            }}
            className="active__line"
          />
          <hr
            style={{
              width: `${
                100 - getPercentDone(campaign.target, campaign.amountRaised)
              }%`,
            }}
          />
        </div>
        <div className="campaign__body">
          <p>
            ${campaign.amountRaised.toLocaleString()}/
            <span>{campaign.target.toLocaleString()}</span>
          </p>
          <p>{getPercentDone(campaign.target, campaign.amountRaised)}%</p>
        </div>
      </div>
    </Link>
  );
};

export default AllC;
