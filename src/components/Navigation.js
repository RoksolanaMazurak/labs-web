import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import Search from "./Search";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" className="p-3">
        <Container>
          <Navbar.Brand href="/home" className="fw-bold">
            BookShop<i className="bi bi-book-fill m-2"></i>
          </Navbar.Brand>
          <Nav className="me-auto d-flex justify-content-around">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/catalog">Catalog</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
          <InputGroup className="m-2 w-50">
            <Form.Control placeholder="Search for book" />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
