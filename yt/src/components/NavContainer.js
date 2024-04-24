import React, { useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function NavContainer() {
  const [user, setUser] = React.useState("a@gmail.com");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }
    , []);


  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center">
      <Nav variant="underline" className="me-auto">
        <Nav.Item>
          <Nav.Link href="/feed" eventKey="link-2">Feed</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/add_video" eventKey="link-1">Add New Video</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* Logout */}
      <Navbar.Brand href="/" className="mx-auto">RecSelf</Navbar.Brand>
      {isLoggedIn ? (
        <Nav variant="underline">
          <Nav.Item>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login" onClick={handleLogout}>Logout</Nav.Link>
          </Nav.Item>
        </Nav>
      ) : (
        <Nav variant="underline">
          <Nav.Item>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>
        </Nav>
      )}
    </Navbar>

  );
}

export default NavContainer;
