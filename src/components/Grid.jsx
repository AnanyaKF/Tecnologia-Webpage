import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



function Grid() {
  // Common style for each column
  const colStyle = {
    color: 'black',
    display: 'flex',
    flexDirection: 'column',  // Adjusted to vertical layout
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',  // Adjusted for centered text
    paddingTop: '23px',   // Reduced padding for spacing
    fontSize: '11px', 
  };

  // Style for the red diamond icon
  const diamondStyle = {
    color: 'red',
    fontSize: '11px',  // Adjusted font size
  };

  return (
    <Container>
      <Row>
        {/* Column 1 */}
        <Col style={colStyle}>
          <h6>REVIEWED ON<br /><FontAwesomeIcon icon={faStar} style={diamondStyle} /><FontAwesomeIcon icon={faStar} style={diamondStyle} /><FontAwesomeIcon icon={faStar} style={diamondStyle} /><FontAwesomeIcon icon={faStar} style={diamondStyle} /><FontAwesomeIcon icon={faStar} style={diamondStyle} /><br /><h4>Clutch</h4>31 REVIEWS</h6>
        </Col>
        
        {/* Column 2 */}
        <Col style={colStyle}>
          <h6><b>20 Years</b><br />Proven Track Record</h6>
        </Col>
        
        {/* Column 3 */}
        <Col style={colStyle}>
          <h6><b>98%</b><br />Customer Satisfaction</h6>
        </Col>
        
        {/* Column 4 */}
        <Col style={colStyle}>
          <h6><b>1,500 Projects</b><br />We Have Completed</h6>
        </Col>
        
        {/* Column 5 */}
        <Col style={{ ...colStyle, borderRight: 'none' }}>
          <h6><b>3 Mins</b><br />Average Answer Time</h6>
        </Col>
      </Row>
    </Container>
  );
}




    


export default Grid;


