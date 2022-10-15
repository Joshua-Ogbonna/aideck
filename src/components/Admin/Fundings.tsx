import React from "react";
import { Table } from "reactstrap";
import { fundings } from "../../assets/data";

const Fundings = () => {
  return (
    <div className="missionary__applications">
      <h5>Fundings</h5>
      <div className="table">
        <Table responsive borderless>
          <thead>
            <tr>
              <th>
                <div>Name</div>
              </th>
              <th>
                <div>Email</div>
              </th>
              <th>
                <div>Description</div>
              </th>
              <th>
                <div>Target</div>
              </th>
              <th>
                <div>Actions</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {fundings.map((funding, idx) => (
              <tr key={idx}>
                <td>
                  <div>{funding.name}</div>
                </td>
                <td>
                  <div>{funding.email}</div>
                </td>
                <td>
                  <div>{funding.discription}</div>
                </td>
                <td>
                  <div>{funding.amount}</div>
                </td>
                <td>
                  <div className="actions">
                    <button>Decline</button>
                    <button>Approve</button>
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

export default Fundings;
