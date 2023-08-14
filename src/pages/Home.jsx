
import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Form, Button,  } from 'react-bootstrap';
import {  Table } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import OvalTextBoxes from './OvalTextBoxes';
import './OvalTextBoxes.css';









const MyComponent = () => {
  const ovalImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  
  const textBoxStyle = {
    flex: 1,
  };
  
  const headingStyle = {
    marginBottom: '5px',
    fontSize: '14px',
  };
  
  const paragraphStyle = {
    margin: '0',
    fontSize: '12px',
  };
    const yellowStarIcon = <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />;
  
    const renderStarIcons = (count) => {
      return Array.from({ length: count }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} style={{ color: 'yellow' }} />
      ));
    };

    const lightBlueGradientBackground = {
      background: 'linear-gradient(to bottom, #b3e0f2, #66a3d2)',
      padding: '50px',
      paddingTop:'50px'
    };
  
  
  
  const cardStyle = {
    background: 'linear-gradient(to bottom, black, #1a1a1a)',
    color: 'white',
  };
  

 
 
  
 return (
    <div>

        
      <Container>
      

       <Row>
  <Col xs={2} md={3} >
    <div>
      <Image src="ce.png" style={{ width: '100px', height: '120px', paddingTop: '20px' }} />
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <h2>Cost-effectiveness</h2>
        <p>We offer affordable IT solutions that help you reduce costs and improve your bottom line.</p>
      </div>
    </div>
  </Col>
  <Col xs={2} md={3} >
    <div>
      <Image src="IE.jpg" style={{ width: '80px', height: '100px', paddingTop: '20px' }} />
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <h2>Innovative Technology</h2>
        <p>We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.</p>
      </div>
    </div>
  </Col>
  <Col xs={2} md={3} >
    <div >
      <Image src="IT.png" style={{ width: '80px', height: '100px',paddingTop: '20px' }} />
      <div>
        <h2>Industry Expertise</h2>
        <p>We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.</p>
      </div>
    </div>
  </Col>
  <Col xs={2} md={3} >
    <div >
      <Image src="SC.png" style={{ width: '80px', height: '100px', paddingTop: '20px' }} />
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <h2>Scalability</h2>
        <p>Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.</p>
      </div>
    </div>
  </Col>
</Row>

       

    </Container>

    <hr className="mt-0 my-4" />

    <h5  style={{color:'darkblue',fontFamily: 'serif' , }}><b>About Technologies</b></h5>

    

    
    <div style={lightBlueGradientBackground}>

    <div>
      HOW WE DO
    </div>
    <h1 style={{ paddingTop:'10px',paddingBottom:'10px' }} >Solutions</h1>


    <CardGroup style={{ marginBottom: '20px' }}>
  <Card>
    <Card.Img variant="top" src="ManagedServices.jpeg" style={{ width: '100px', height: '100px' }} />
    <Card.Body>
      <Card.Title>Managed Services</Card.Title>
      <Card.Text>
        Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Learn More</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="ITCA.jpg" style={{ width: '100px', height: '100px' }} />
    <Card.Body>
      <Card.Title>IT Consulting & Advisory</Card.Title>
      <Card.Text>
        Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Learn More</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="css.jpg" style={{ width: '100px', height: '100px' }} />
    <Card.Body>
      <Card.Title>Cyber Security</Card.Title>
      <Card.Text>
        Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Learn More</small>
    </Card.Footer>
  </Card>
</CardGroup>

<CardGroup style={{ marginBottom: '20px' }}>
  <Card>
    <Card.Img variant="top" src="WD.png" style={{ width: '90px', height: '90px' }} />
    <Card.Body>
      <Card.Title>Web Development</Card.Title>
      <Card.Text>
        Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Learn More</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="mobilexevelop.webp" style={{ width: '120px', height: '90px' }} />
    <Card.Body>
      <Card.Title>Mobile Development</Card.Title>
      <Card.Text>
        Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Learn More</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="cloudservices.png" style={{ width: '110px', height: '90px' }} />
    <Card.Body>
      <Card.Title>Cloud Services</Card.Title>
      <Card.Text>
        Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Learn More</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>

<div className="text-center" style={{ paddingTop:'20px', }}>
      <button className="btn btn-primary">View all solutions</button>
</div>   


    <h1 style={{paddingTop:'50px',paddingLeft:'20px'}}>Solving IT challenges in every industry, every day.</h1>
     

    <OvalTextBoxes/>

    <h5  style={{color:'darkblue',fontFamily: 'serif' ,textAlign:'center', }}><b><u>View all Industries</u></b></h5>
    <div className="p-3">
      WHAT WE USE
    </div>
    <h1 style={{paddingLeft:'30px'}}>Bringing the best IT vendors to you.</h1>
    <p style={{paddingLeft:'30px'}}>Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.</p>
     

    <Container className="mt-5">
      <Card style={{ backgroundColor: 'black' , color: 'white'}}>
        <Card.Header>
          <h2 className="text-center mb-0">Your IT Challenges</h2>
        </Card.Header>
        <Card.Body>
          <Table className="table" style={{ backgroundColor: 'black', color: 'white' }}>
            <thead>
              <tr>
                <th scope="col" style={{ backgroundColor: 'black', color: 'white' }}>DATA CENTER & HOSTING</th>
                <th scope="col" style={{ backgroundColor: 'black', color: 'white' }}>COLOBORATION</th>
                <th scope="col" style={{ backgroundColor: 'black', color: 'white' }}>CLOUD PLATFORM</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: 'black', }}>
                <td style={{ backgroundColor: 'black', color: 'white' }}>
                  Our facility - Data Center is the first in the USA that meets the strict ANSI/TIA -914 rated for certificate requirements for design, build and operate.
                </td>
                <td style={{ backgroundColor: 'black', color: 'white' }} >
                  Despite modern technology, your users operate in a familiar Microsoft office environment and benefit from board compatibility and low threshold access.
                </td>
                <td style={{ backgroundColor: 'black', color: 'white' }}>
                  Customized cloud platform designed to improve performance, lower IT costs, and provide secure and reliable access to your company data from any device anytime, anywhere.
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
<div className="p-3">
      WHAT WE DO
    </div>
    <h1 style={{paddingLeft:'30px'}}>SUCCESS STORIES</h1>

    <CardGroup style={{ marginBottom: '20px' }}>
  <Card>
    <Card.Img variant="top" src="UH.png" style={{ width: '100px', height: '100px' }} />
    <Card.Body>
      <Card.Title>Major Insurance Provider Saves $750k per Month With Big Data Migration</Card.Title>
      <Card.Text>
      The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Learn More</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="nesperso.jpg" style={{ width: '100px', height: '100px' }} />
    <Card.Body>
      <Card.Title>Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story</Card.Title>
      <Card.Text>
      The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Learn More</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="LondonUnderground.jpg" style={{ width: '100px', height: '100px' }} />
    <Card.Body>
      <Card.Title>Strategic Move to an AI-supported application for Public Safety Travel App in London</Card.Title>
      <Card.Text>
      Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Learn More</small>
    </Card.Footer>
  </Card>
</CardGroup>




    
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="lb.jpg"
          alt="First slide"
          style={{ maxWidth: '500%', maxHeight: '300px' }}

        />
        <Carousel.Caption>
          <h3  style={{ color:'darkblue' }}>Tecnologia implemented such a poweful platform that we had no break in service when our employees had to work from home due to covid-19  pandemic. we aren't concerned about how to shift to a remote working environment because integris facilitated a seamless transition</h3>
          <h5  style={{ color:'darkblue' }}>Amanda Parks</h5>
          <p>Network manager,Healthcare organisation</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="lb.jpg"
          alt="Second slide"
          style={{ maxWidth: '500%', maxHeight: '300px' }}

        />
        <Carousel.Caption>
          <h3 style={{ color:'darkblue' }}>Tecnologia has been a outstanding partner. There team is professional,knowledgeable and customer-service driven. Tecnologia proactive collabrative approach has been critical in helping us build an IT infrastructure that enables our SUCCESS today and supports our long term positioning stategy</h3>
          <h5  style={{ color:'darkblue' }}>John Labkins</h5>
          <p>Partner,CEO & Telecommunication company</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="lb.jpg"
          alt="Second slide"
          style={{ maxWidth: '500%', maxHeight: '300px' }}

        />
        <Carousel.Caption>
          <h3 style={{ color:'darkblue' }}>I have been a customer for more than a decade. Tecnologia is an example of the way managed services should be done. They do their very best to make sure you suceed. If thers an issue, they step in immediately</h3>
          <h5  style={{ color:'darkblue' }}>Daniel Legrante</h5>
          <p>CEO,Restaurant Product Supplier</p>

        </Carousel.Caption>


      </Carousel.Item>
      
    </Carousel>

    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div >
        <h6>
          REVIEWED ON <br />
          {renderStarIcons(5)}
          <br />
          <h6>Clutch</h6>
          31 REVIEWS
        </h6>
      </div>
      <img src='gi.png' style={{ width: '80px', height: '60px' }} ></img>

      <div >
        <h6>
          4.9 <br />
          {renderStarIcons(5)}
          <br />
          <h6>GOOGLE</h6>
          CUSTOMER REVIEWS
        </h6>
      </div>
    </div>
    
    
    <h1 style={{paddingTop:'50px',paddingLeft:'30px'}}>Consultation Form</h1>


    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} md={8} lg={6}>
          <div className="border p-4">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formName">
            <Form.Label>Last Name</Form.Label>

            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formCompany">
            <Form.Label>Company / Organization</Form.Label>
            <Form.Control type="text" placeholder="Enter company name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label> Company Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formNumber">
            <Form.Label> Phone Number</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formHelp">
            <Form.Label> How can we help you?</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Tell us about your consultation needs" />
          </Form.Group>


              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    
      
  


    
    <h1 style={{paddingTop:'50px',paddingLeft:'30px'}}>Recognized by the best</h1>
    <p style={{paddingTop:'25px',paddingLeft:'30px'}}>The company needed to complete a complex <br/> migration on a tight deadline to avoid millions of <br/>dollars in post-contract fees and fines.</p>

    <div className="subscription-layout">
      <div className="black-background">
        <Card className="subscription-card" style={cardStyle}>
          <Card.Body>
            <Card.Title>Subscription Form</Card.Title>

            <div className="section">
              <h4>Solutions</h4>
              <ul>
                <li>Managed Services</li>
                <li>IT Consulting & Advisory</li>
                <li>Cyber Security</li>
                <li>Web Development</li>
              </ul>
            </div>

            <div className="section">
              <h4>Company</h4>
              <ul>
                <li>About us</li>
                <li>Why us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Partners & Certifications</li>
                <li>Reviews & Awards</li>
              </ul>
            </div>

            <div className="section">
              <label>
                <h5>Don't Miss Out Updates</h5>
                <input type="checkbox" />
                I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.
              </label>
            </div>
          </Card.Body>
        </Card>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </div>
    </div>
    <h6 style={{paddingLeft:'30px',textAlign:'center'}}>@ 2023 Tecnologia | Terms & Condition | Privacy Policy</h6>

    




    </div>
    
    
  );
};

export default MyComponent;
