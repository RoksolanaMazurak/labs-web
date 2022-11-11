import React from "react";
import { Card } from "react-bootstrap";

function CardItem({ title, text, image }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
