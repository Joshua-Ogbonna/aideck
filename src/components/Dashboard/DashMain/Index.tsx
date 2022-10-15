import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "reactstrap";
import { data, donations } from "../../../assets/data";
import { dateFormatter } from "../../../helpers";
import Campaign from "../../Reusables/Campaign";

import "./DashMain.css";

const DashboardIndex = () => {
  const [activeSummary, setActiveSummary] = useState("");
  const navigate = useNavigate();

  const handleActiveSummary = (summary: string) => {
    setActiveSummary(summary);
  };

  const activeSummaryClass = (summary: string) => {
    if (activeSummary === summary) {
      return `active__summary summary shadow`;
    } else {
      return `summary shadow`;
    }
  };

  return (
    <div className="dashboard__index dashboard__components">
      <h5 className="dashboard__title">Dashboard</h5>
      <div className="dashboard__summary">
        {/* Summary for account balance */}
        <div
          className={activeSummaryClass("balance")}
          onClick={() => handleActiveSummary("balance")}
        >
          <div className="summary__head">
            <span>Account Balance</span>
            <h5>$1,000</h5>
            <p>Withdraw</p>
          </div>
        </div>
        {/* Summary for total donor */}
        <div
          className={activeSummaryClass("donors")}
          onClick={() => handleActiveSummary("donors")}
        >
          <div className="summary__head">
            <span>Total Donors</span>
            <h5>1,000</h5>
            {/* <p></p> */}
          </div>
        </div>
      </div>

      {/* Quick view campaign */}
      <div className="your__campaigns shadow p-3">
        <div className="head">
          <h5>Your Campaigns</h5>
          <i
            onClick={() => navigate("/dashboard/campaigns")}
            className="bx bxs-right-top-arrow-circle"
          ></i>
        </div>
        <div className="campaigns">
          {data.map((campaign, idx) => (
            <Campaign campaign={campaign} key={idx} />
          ))}
        </div>
      </div>

      {/* Donation History */}
      <div className="donation__history shadow p-3">
        <h5>Donation History</h5>
        <Table responsive borderless>
          <thead>
            <tr>
              <th>
                <div>Name</div>
              </th>
              {/* <th>
                <div>Email Address</div>
              </th> */}
              <th>
                <div>Amount</div>
              </th>
              <th>
                <div>Date</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, idx) => (
              <tr key={idx}>
                <td><div>{donation.name}</div></td>
                <td>
                  <div>{donation.amount}</div>
                </td>
                <td>
                  <div>{dateFormatter(donation.date)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardIndex;
