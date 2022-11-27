import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import CardItem from "../components/CardItem";

const data = [
  {
    title: "Our Positions",
    text: "While our positions are carefully considered and deeply held, there is much room for healthy debate and differing opinions. We hope being clear about our positions is helpful.",
    image: "images/pros1.svg",
  },
  {
    title: "Leadership Principles",
    text: "Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.",
    image: "images/pros2.svg",
  },

  {
    title: "Awards and Recognition",
    text: "We are honored to be recognized for the work we do on behalf of our customers, employees, and communities every day.",
    image: "images/pros3.svg",
  },
];

function Home() {
  return (
    <>
      <Image src="images/hero.svg" fluid className="position-relative" />
      <Container>
        <div className="position-absolute top-50 w-25 text-light">
          <h1 className="fw-bold">
            Books give a soul<br></br>
            <span className="fs-5 fw-normal">
              to the universe, wings to the mind, flight to the imagination, and
              life to everything
            </span>
          </h1>
          <span className="fst-italic fs-4">– Plato</span>
        </div>
      </Container>
      <h2 className="fw-bold mt-5 text-center">About Us</h2>
      <Container className="d-flex justify-content-between mt-5">
        {data.map(({ title, text, image }, idx) => (
          <CardItem title={title} text={text} image={image} id={idx} />
        ))}
      </Container>
      <div className="d-flex justify-content-center my-5">
        <Button variant="primary" size="md">
          View More
        </Button>
      </div>
    </>
  );
}

export default Home;
