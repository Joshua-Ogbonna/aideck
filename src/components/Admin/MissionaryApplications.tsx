import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Table } from "reactstrap";
import { missionaries } from "../../assets/data";

import "./Admin.css";

const MissionaryApplications = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="missionary__applications">
      <h5>Missionary Applications</h5>
      <div className="table">
        <Table responsive borderless>
          <thead>
            <tr>
              <th>
                <div>Name</div>
              </th>
              <th>
                <div>Email Address</div>
              </th>
              <th>
                <div>Phone</div>
              </th>
              <th>
                <div>Location</div>
              </th>
              <th>
                <div>Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {missionaries.map((missionary) => (
              <tr>
                <td>
                  <div>{missionary.name}</div>
                </td>
                <td>
                  <div>{missionary.email}</div>
                </td>
                <td>
                  <div>{missionary.phone}</div>
                </td>
                <td>
                  <div>{missionary.address}</div>
                </td>
                <td>
                  <div className="view__more">
                    <Link to={`/admin/${missionary.id}`}>View More</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MissionaryApplications;
