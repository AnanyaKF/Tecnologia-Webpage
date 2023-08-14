import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Background = () => {
    const gradientBackground = {
        background: 'linear-gradient(to bottom, #333333, #000000)', // Adjust the shades of black/gray as needed
        minHeight: '10vh',
        alignItems: 'left',
        justifyContent: 'left',
        textAlign: 'left',
        padding: '30px 0', // Adjust padding as needed
    };

    const buttonStyle = {
        color: 'blue',
    };

    return (
        <Container className="bg-dark text-white" style={gradientBackground}>
            <Button variant="outline-light">
                <h5 style={buttonStyle}>What we do</h5>
            </Button>
            <h1 style={{ paddingTop: '50px', paddingBottom: '20px' }}>
                <b>Simplifying IT</b> <br /> <b>for a complex world.</b>
            </h1>
        </Container>
    );
}


export default Background;
