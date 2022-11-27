import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CatalogItem({ title, author, text, image, price }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h6 className="text-secondary">{author}</h6>
        <Card.Text>{text}</Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Title>Price: </Card.Title>
          <Card.Title>{price} UAH</Card.Title>
        </div>
        <div className="d-grid gap-2 mt-2">
          <Button variant="primary" size="lg">
            View more
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CatalogItem;
