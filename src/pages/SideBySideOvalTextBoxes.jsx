import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideBySideOvalTextBoxes.css';

function SideBySideOvalTextBoxes() {
  return (
    <div className="container my-5">
      <div className="side-by-side-oval-text-boxes">
        <div className="oval-text-box">
          <div className="oval-image">
            <img
              src="img1.jpg"
              alt="Image 1"
              className="img-fluid"
            />
          </div>
          <div className="text">
          <h2><b>Industry & Manufacturing</b></h2>

          </div>
        </div>
        <div className="oval-text-box">
          <div className="oval-image">
            <img
              src="img1.jpg"
              alt="Image 2"
              className="img-fluid"
            />
          </div>
          <div className="text">
            <h2><b>Transportation & Logistics</b></h2>
          </div>
        </div>

        <div className="oval-text-box">
          <div className="oval-image">
            <img
              src="img1.jpg"
              alt="Image 3"
              className="img-fluid"
            />
          </div>
          <div className="text">
            <h2><b>Healthcare</b></h2>
          </div>
        </div>





      </div>
      <div className="side-by-side-oval-text-boxes">
        <div className="oval-text-box">
          <div className="oval-image">
            <img
              src="img1.jpg"
              alt="Image 4"
              className="img-fluid"
            />
          </div>
          <div className="text">
            <h2><b>Bank & Insurance</b></h2>
          </div>
        </div>
        <div className="oval-text-box">
          <div className="oval-image">
            <img
              src="img1.jpg"
              alt="Image 5"
              className="img-fluid"
            />
          </div>
          <div className="text">
            <h2><b>Consulting Providers</b></h2>
          </div>
        </div>

        <div className="oval-text-box">
          <div className="oval-image">
            <img
              src="img1.jpg"
              alt="Image 6"
              className="img-fluid"
            />
          </div>
          <div className="text">
            <h2><b>Non-Profits</b></h2>
          </div>
        </div>

      </div>
    </div>



  );
}

export default SideBySideOvalTextBoxes;
