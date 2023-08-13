import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  const diamondStyle = {
    color: 'yellow',
  };
  return (
    <div className="container">
  <div className="row">
    <div className="col-md-3">
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
    <div className="col-md-3">
    <h6>Seventh Ave, 20th Floor</h6>
      <h6>New York, NY 10018 </h6>
    </div>
    <div className="col-md-3">
      <h6>T: 1-800-356-8933</h6>
      <h6>E: office@tecnologia.com</h6>
    </div>
    
  </div>
  </div>
  );
};

export default ContactInfo;
