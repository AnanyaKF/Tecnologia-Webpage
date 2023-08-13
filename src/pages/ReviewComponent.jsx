import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const diamondStyle = {
  color: '#ffcc00',
};

const ReviewComponent = () => {
  return (
    <div className="d-flex justify-content-between">
      <div style={{ paddingLeft: '900px' }}>
        <h5>
          REVIEWED ON <br />
          <FontAwesomeIcon icon={faStar} style={diamondStyle} />
          <FontAwesomeIcon icon={faStar} style={diamondStyle} />
          <FontAwesomeIcon icon={faStar} style={diamondStyle} />
          <FontAwesomeIcon icon={faStar} style={diamondStyle} />
          <FontAwesomeIcon icon={faStar} style={diamondStyle} />
          <br />
          <h4>Clutch</h4>
          31 REVIEWS
        </h5>
      </div>
      <div style={{ paddingLeft: '15px' }}>
        <h5>
          4.9 <br />
          <FontAwesomeIcon icon={faStar} style={diamondStyle} />
          <FontAwesomeIcon icon={faStar} style={diamondStyle} />
          <FontAwesomeIcon icon={faStar} style={diamondStyle} />
          <FontAwesomeIcon icon={faStar} style={diamondStyle} />
          <FontAwesomeIcon icon={faStar} style={diamondStyle} />
          <br />
          <h4>GOOGLE</h4>
          CUSTOMER REVIEWS
        </h5>
      </div>
    </div>
  );
};

export default ReviewComponent;
