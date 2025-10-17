import React from "react";
import Announcement from "./Announcment";
import { Container, Row, Col } from "reactstrap";

const Intro = () => {
  return (
    <Container className="intro-section shadow-lg p-5 mb-5 bg-white rounded-4">
      <Row className="align-items-center">
        {/* OUR STORY SECTION */}
        <Col xs="12" lg="7" className="text-center mb-5 mb-lg-0">
          <h1 className="heading text-uppercase fw-bold mb-4 text-primary">
            Our Story
          </h1>
          <div className="content px-3">
            <p className="text-muted fs-5 lh-lg mb-4">
              <span className="fw-semibold text-dark">SME IIT(ISM) Students Chapter</span>, 
              the official student chapter of the 
              <span className="text-primary"> Society for Mining, Metallurgy & Exploration (SME)</span>, 
              was inaugurated in <b>May 2011</b>. 
              It was founded with the sole vision of 
              igniting curiosity and enthusiasm among the students of IIT(ISM) 
              in the field of <b>Mining Engineering</b>.
              <br />
              <br />
              Through workshops, competitions, and industry collaborations, 
              the society has grown into a platform that nurtures 
              technical excellence and leadership, 
              representing IIT(ISM) as a strong body of young mining engineers.
            </p>

            <div className="d-flex justify-content-center">
              <a className="btn-readmore" href="/about">
                Read More →
              </a>
            </div>
          </div>
        </Col>

        {/* ANNOUNCEMENT SECTION */}
        <Col lg="5">
          <Announcement />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
