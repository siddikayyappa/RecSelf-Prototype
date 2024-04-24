import React from "react";
import  {Nav}  from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function NavContainer() {
  const [user, setUser] = React.useState(null);
  return (
    <Navbar bg="dark" variant="dark">
    <Nav >
      <Nav.Item>
        <Nav.Link href="/feed">Feed</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/add_video">Add New Video</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>  

  );
}

export default NavContainer;
