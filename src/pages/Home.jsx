
import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import PrimaryButton from './PrimaryButton';
import './SideBySideOvalTextBoxes.css';
import SideBySideOvalTextBoxes from './SideBySideOvalTextBoxes';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCarousel from './ImageCarousel';
import ReviewComponent from './ReviewComponent';
import { Form, Button,  } from 'react-bootstrap';
import {  Table } from 'react-bootstrap';






const MyComponent = () => {
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

    <h1 style={{paddingTop:'20px'}}>Solutions</h1>

    <div className="p-3 bg-blue elementor-heading-title elementor-size-default">
      HOW WE DO
    </div>

    
    
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
    <Card.Img variant="top" src="mobilexevelop.webp" style={{ width: '90px', height: '90px' }} />
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
    <Card.Img variant="top" src="cloudservices.png" style={{ width: '90px', height: '90px' }} />
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
    <PrimaryButton/>
    <h1 style={{paddingTop:'50px'}}>Solving IT challenges in every industry, every day.</h1>
    <SideBySideOvalTextBoxes/>

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



    
    <ImageCarousel />
    
    
    <ReviewComponent/>
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
