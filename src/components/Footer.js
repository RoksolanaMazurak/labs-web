import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="bg-dark">
        <Container className="d-flex justify-content-between pt-5">
          <div className="text-light">
            <div className="mb-2">
              <span className="text-secondary fw-semibold">Contact Us</span>
            </div>
            <span>bookshelf.corp@gmail.com</span>
            <br />
            <span>+(44) 712-316-4504</span>
          </div>
          <div className="fw-bold text-light">
            <h6>
              BookShop<i className="bi bi-book-fill m-2"></i>
            </h6>
          </div>
          <div>
            <ul className="list-unstyled d-flex justify-content-between align-items-start">
              <li>
                <a className="text-light" href="/">
                  <h5>
                    <i className="bi bi-facebook"></i>
                  </h5>
                </a>
              </li>
              <li>
                <h5>
                  <a className="text-light mx-3" href="/">
                    <i className="bi bi-twitter"></i>
                  </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a className="text-light mx-2" href="/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a className="text-light mx-2" href="/">
                    <i className="bi bi-google"></i>
                  </a>
                </h5>
              </li>
            </ul>
          </div>
        </Container>
        <hr className="text-light"></hr>
        <div className="d-flex justify-content-center py-2">
          <div className="border-2"></div>
          <span className="text-secondary">
            2022 BookShelf© All rights reserved
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
