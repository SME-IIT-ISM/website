import React from "react";
import Announcement from "./Announcment";
import { Container, Row, Col, Button } from "reactstrap";

const Intro = (props) => {
  return (
    <Container className="shadow p-4 mb-5 bg-white rounded">
      <Row>
        <Col xs="12" md="7">
          <div className="text-center">
            <h1 className="heading text-uppercase text-center">OUR STORY</h1>
            <div className="content ">
              <p className="text-center">
                SME IIT(ISM) Students Chapter , an IIT (ISM) Dhanbad student
                chapter of Society for Mining, Metallurgy &amp; Exploration was
                inaugurated in May 2011. It was found with the sole purpose of
                kindling curiosity and interest in the minds of the students of
                ISM about the field of mining field of mining engineering. The
                society collectively works in the way of making our way of
                making our presence known to the world as a potential body of
                mining engineers.
              </p>
              <div>
                <a className="bt bt-blue text-center" href="/about">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col md="5">
          <Announcement />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
