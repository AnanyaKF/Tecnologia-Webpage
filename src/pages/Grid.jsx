import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Grid() {
    const colStyle = {
        color:'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        paddingTop: '100px',
      };
      const diamondStyle = {
        color: 'red',
      };
  return (
    <Container>
      <Row>
        <Col style={colStyle}>
          <h5>REVIEWED ON<br /><FontAwesomeIcon icon={faStar} style={diamondStyle} /><FontAwesomeIcon icon={faStar} style={diamondStyle} /><FontAwesomeIcon icon={faStar} style={diamondStyle} /><FontAwesomeIcon icon={faStar} style={diamondStyle} /><FontAwesomeIcon icon={faStar} style={diamondStyle} /><br /><h4>Clutch</h4>31 REVIEWS</h5>
        </Col>
        <Col style={colStyle}>
          <h5><b>20 Years</b><br />Proven Track Record</h5>
        </Col>
        <Col style={colStyle}>
          <h5><b>98%</b><br />Customer Satisfaction</h5>
        </Col>
        <Col style={colStyle}>
          <h5><b>1,500Projects</b> <br />We Have Completed</h5>
        </Col>
        <Col style={{ ...colStyle, borderRight: 'none' }}>
          <h5><b>3Mins</b><br />Average Answer Time</h5>
        </Col>
      </Row>


    </Container>



    
  );
}

export default Grid;


