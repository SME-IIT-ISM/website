import React from "react";
import { Container, Row, Col } from "reactstrap";
import Marquee from "react-css-marquee";

const Announcement = (props) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col className="d-flex align-items-center justify-content-center ">
          <h1>Announcements</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex align-items-center justify-content-center ">
          <Marquee text="First Announcement" />
        </Col>
      </Row>
    </Container>
  );
};

export default Announcement;
