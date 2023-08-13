import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';







const Background = () => {
        return (
    <Container className="bg-dark text-white" style={{ minHeight: '10vh', }}>

        
        <Button variant="outline-light" ><h5 style={{ color:'blue',}}>What we do</h5></Button>

      <h1 style={{ paddingTop: '200px',paddingBottom:'20px' }} ><b>Simplifying IT</b> <br /> <b>for a complex world.</b></h1>

      </Container>


     
      



  );
}

export default Background;
