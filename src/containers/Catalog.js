import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import CatalogItem from "../components/CatalogItem";

const data = [
  {
    title: "Little women",
    author: "Louisa May Alcott",
    text: "«Little Women» is a novel by American author Louisa May Alcott (1832–1888)...",
    image: "images/little-women.svg",
    price: 300,
  },
  {
    title: "Elevation",
    author: "Stephen King",
    text: "Elevation is a novella by American author Stephen King, published on October 30, 2018...",
    image: "images/elevation.svg",
    price: 500,
  },

  {
    title: "Picture of Dorian Gray",
    author: " Oscar Wilde",
    text: "The story revolves around a portrait of Dorian Gray painted by Basil Hallward, a friend of Dorian's and...",
    image: "images/picture-of-dorian-gray.svg",
    price: 210,
  },
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    text: "Lily hasn't always had it easy, but that's never stopped her from working hard...",
    image: "images/it-ends-with-us.svg",
    price: 210,
  },
];

function Catalog() {
  return (
    <div className="bg-light p-5">
      <Container className="d-flex justify-content-between">
        <Row>
          <Col>
            <Form.Select>
              <option>Price</option>
              <option value="1">From low to high</option>
              <option value="2">From high to low</option>
              <option value="3">Default</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select>
              <option>Genre</option>
              <option value="1">Fantasy</option>
              <option value="2">Novel</option>
              <option value="3">Detective</option>
              <option value="3">Detective</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select>
              <option>Pages</option>
              <option value="1">200-500</option>
              <option value="2">500-800</option>
              <option value="3">800+</option>
            </Form.Select>
          </Col>
        </Row>
        <Button>Apply</Button>
      </Container>
      <Container className="d-flex justify-content-between mt-5 mb-5">
        {data.map(({ title, author, text, image, price }, idx) => (
          <CatalogItem
            title={title}
            author={author}
            text={text}
            image={image}
            price={price}
            id={idx}
          />
        ))}
      </Container>
    </div>
  );
}

export default Catalog;
