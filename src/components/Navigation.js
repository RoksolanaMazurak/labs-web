import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" className="p-3">
        <Container>
          <Navbar.Brand href="/home" className="fw-bold">
            BookShop<i className="bi bi-book-fill m-2"></i>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/catalog">Catalog</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
          <div className="m-2">
            <Button variant="primary">Sign Up</Button>
          </div>
          <div>
            <Button variant="outline-secondary">Log In</Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
