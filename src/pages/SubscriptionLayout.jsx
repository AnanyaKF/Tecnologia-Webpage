import React from 'react';
import {  Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SubscriptionLayout.css'; 


const SubscriptionLayout = () => {
  return (
    <div className="subscription-layout">
      <div className="black-background">
        <Card className="subscription-card">
          <Card.Body>
            <Card.Title>Subscription Form</Card.Title>

            <div className="section">
              <h4>Solutions</h4> 
              <ul>
                <li>Managed Services </li> 
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
                <h5>Dont Miss Out Updates</h5>
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
  );
};

export default SubscriptionLayout;
