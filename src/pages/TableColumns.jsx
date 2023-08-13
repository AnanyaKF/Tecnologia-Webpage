import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TableColumns.css'; 

function TableColumns() {
  return (
    <div className="container mt-5">
      <div className="card black-bg">
        <div className="card-header">
          <h2 className="text-center mb-0">Your IT Challenges</h2>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="black-col">DATA CENTER & HOSTING</th>
                <th scope="col" className="black-col">COLOBORATION</th>
                <th scope="col" className="black-col">CLOUD PLATFORM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="black-col">
                  Our facility - Data Center is the first in the USA that meets the strict ANSI/TIA -914 rated for certificate requirements for design, build and operate.
                </td>
                <td className="black-col">
                  Despite modern technology, your users operate in a familiar Microsoft office environment and benefit from board compatibility and low threshold access.
                </td>
                <td className="black-col">
                  Customized cloud platform designed to improve performance, lower IT costs, and provide secure and reliable access to your company data from any device anytime, anywhere.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableColumns;
