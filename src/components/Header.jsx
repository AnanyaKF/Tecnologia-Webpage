import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Form, Image, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import PrimaryButton from './PrimaryButtons';
import DarkButton from './DarkButton';


const NavBar = () => {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className="text-center">
            <BsChevronLeft />
            <BsChevronRight className="dark-blue" />
            <b>Technologia</b>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <NavDropdown title={<span><b>H.</b></span>} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"> IT services</NavDropdown.Item>
                <NavDropdown.Item href="#action4">App Development</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1"><b>Solutions</b></Nav.Link>
              <NavDropdown title={<span><b>Company</b></span>} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Why us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Team</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Careers</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Partners & Certifications</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Reviews & Awards</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2"><b>Case Studies</b></Nav.Link>
              <Nav.Link href="#action2"><b>Blog</b></Nav.Link>
              <NavDropdown title={<span><b>Resources</b></span>} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Schedule a consultation</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Events</NavDropdown.Item>
                <NavDropdown.Item href="#action4">FAQ</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex align-items-center flex-column flex-lg-row">
              <span className="me-3">
                <b>Client Support : <FontAwesomeIcon icon={faArrowRight} size="sm" /></b> 123-456-7890
              </span>
            </div>
            <Form className="d-flex">
              <Button variant="outline-dark"> Contact Us</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="mt-0 my-4" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <h1  style={{ justifyContent: 'center',color:'darkblue',fontFamily: 'serif' ,textalign: 'center',paddingTop: '100px', }} ><b>We manage your IT, so you can manage your business.</b></h1>


            <p><h3>Take charge of your business continuity with innovative IT solutions</h3></p>
            <PrimaryButton/> <DarkButton/>
 


          </div>

          <div className="col-md-6">
            <Image src="img1.jpg" alt="Logo" className="img-fluid" style={{ width: '1500px', height: '480px' }} />
          </div>
        </div>
      </div>

    </div>

  );
}

export default NavBar;

