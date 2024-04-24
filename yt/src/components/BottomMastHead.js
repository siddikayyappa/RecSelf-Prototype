import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function BottomMasthead() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
        {/* Align a text to the center */}
        <Container>
            <Navbar.Brand href="#home" className="mx-auto">Software Engineering Project - 3</Navbar.Brand>
        </Container>

    </Navbar>
  );
}

export default BottomMasthead;