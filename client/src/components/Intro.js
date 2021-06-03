import React from "react";
import Announcement from "./Announcment";
import { Container, Row, Col } from "reactstrap";

const Intro = (props) => {
  return (
    <Container className="shadow p-4 mb-5 bg-white rounded">
      <Row>
        <Col xs="12" md="6">
          <div className="left-align">
            <h1 className="heading text-uppercase">OUR STORY</h1>
            <div className="content">
              <p>
                SME IIT(ISM) Students Chapter , an IIT (ISM) Dhanbad student
                chapter of Society for Mining, Metallurgy &amp; Exploration was
                inaugurated in May 2011. It was found with the sole purpose of
                kindling curiosity and interest in the minds of the students of
                ISM about the field of mining field of mining engineering. The
                society collectively works in the way of making our way of
                making our presence known to the world as a potential body of
                mining engineers.
              </p>
              <p>
                <a href="/Aboutus">Read More</a>
              </p>
            </div>
          </div>
        </Col>
        <Col md="6">
          <Announcement />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
