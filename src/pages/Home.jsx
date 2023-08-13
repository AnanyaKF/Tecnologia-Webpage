
import React from 'react';
import Grid from './Grid'; 
import Background from './Background';
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
import './TableColumns.css'; 
import TableColumns from './TableColumns';
import ImageCarousel from './ImageCarousel';
import ReviewComponent from './ReviewComponent';
import './ConsultationForm.css'; 
import ConsultationForm from './ConsultationForm';
import SubscriptionLayout from './SubscriptionLayout';
import './SubscriptionLayout.css';
import ContactInfo from './ContactInfo';



const MyComponent = () => {
  const diamondStyle = {
    color: 'red',
  };
 
  
 return (
    <div>

        <Grid/>
        <Background/>
        <Container>
      <Row>
        <Col xs={6} md={2} className="d-flex justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <Image src="ce.png" style={{ justifyContent: 'center',paddingLeft: '80px', width: '200px',height: '150px',paddingTop:'30px' }}/>
            <div><h2  style={{ justifyContent: 'center',paddingLeft: '80px', }}>Cost-effectiveness</h2>
            <p  style={{ justifyContent: 'center',paddingLeft: '80px', }}>We offer affordable IT solutions that help you reduce costs and improve your bottom line.</p></div>
          </div>
        </Col>
        <Col xs={2} md={2} className="d-flex justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <Image src="IE.jpg"  style={{ justifyContent: 'center',paddingLeft: '200px', width: '300px',height: '130px',paddingTop:'30px'}}/>
            <div><h2 style={{ justifyContent: 'center',paddingLeft: '200px', }}>Innovative Technology</h2>
            <p style={{ justifyContent: 'center',paddingLeft: '200px', }}>We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.</p>
            </div>
          </div>
        </Col>
        <Col xs={2} md={2} className="d-flex justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <Image src="IT.png"  style={{ justifyContent: 'center',paddingLeft: '350px',width: '450px',height: '130px',paddingTop:'30px' }} />
            <div><h2 style={{ justifyContent: 'center',paddingLeft: '350px', }}>Industry Expertise</h2>
            <p style={{ justifyContent: 'center',paddingLeft: '350px', }}>We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.</p>
            </div>
          </div>
        </Col>
        <Col xs={6} md={2} className="d-flex justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <Image src="SC.png"  style={{ justifyContent: 'center',paddingLeft: '500px',width: '650px',height: '130px', paddingTop:'30px'}} />
            <div><h2 style={{ justifyContent: 'center',paddingLeft: '500px', }}>Scalability</h2>
            <p style={{ justifyContent: 'center',paddingLeft: '500px', }}>Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.</p>
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

    
    
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="ManagedServices.jpeg" />
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
        <Card.Img variant="top" src="ITCA.jpg" />
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
        <Card.Img variant="top" src="css.jpg" />
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

    <CardGroup>
      <Card>
        <Card.Img variant="top" src="WD.png" />
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
        <Card.Img variant="top" src="mobilexevelop.webp" />
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
        <Card.Img variant="top" src="cloudservices.png" />
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
<TableColumns/>

<div className="p-3">
      WHAT WE DO
    </div>
    <h1 style={{paddingLeft:'30px'}}>SUCCESS STORIES</h1>
    <CardGroup>
     
      <Card>
        <Card.Img variant="top" src="UH.png" />
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
        <Card.Img variant="top" src="nesperso.jpg" />
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
        <Card.Img variant="top" src="LondonUnderground.jpg" />
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
    <ConsultationForm />
    <h1 style={{paddingTop:'50px',paddingLeft:'30px'}}>Recognized by the best</h1>
    <p style={{paddingTop:'25px',paddingLeft:'30px'}}>The company needed to complete a complex <br/> migration on a tight deadline to avoid millions of <br/>dollars in post-contract fees and fines.</p>

    <SubscriptionLayout/>
    <ContactInfo />
    <h6 style={{paddingLeft:'30px',textAlign:'center'}}>@ 2023 Tecnologia | Terms & Condition | Privacy Policy</h6>

    




    </div>
    
    
  );
};

export default MyComponent;
