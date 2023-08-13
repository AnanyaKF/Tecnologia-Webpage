import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageCarousel = () => {
   

  return (
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
    
  );
};

export default ImageCarousel;
