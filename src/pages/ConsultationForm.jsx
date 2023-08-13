import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ConsultationForm.css';

const ConsultationForm = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Company Consultation Form</Card.Title>
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
      </Card.Body>
    </Card>
  );
};

export default ConsultationForm;
