import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div>
      <div className="heading">
        <h1 className="text-uppercase text-center">About Us</h1>
      </div>
      <Container className="my-5 about-content">
        <Row>
          <Col>
            <h1 className="text-uppercase text-center">Who we are</h1>
            <p className="my-5">
              SME IIT(ISM) Students Chapter , an IIT (ISM) Dhanbad student
              chapter of Society for Mining, Metallurgy & Exploration was
              inaugurated in May 2011. It was found with the sole purpose of
              kindling curiosity and interest in the minds of the students of
              ISM about the field of mining engineering. The society
              collectively works in the way of making our presence known to the
              world as a potential body of mining engineers. We serve as the
              interface between our glorious alumni and our student members in
              order to enrich them with our alumni's priceless experience and
              knowledge. The members all aim to inculcate the virtues of
              professional attitude and involvement towards mining. We put in
              our best efforts to provide the members with ample global exposure
              , so that they can learn and adapt themselves according to the
              rapid developments the sector is going through, and attain enough
              self-confidence to walk beside the leaders of mining in the world
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className="text-uppercase text-center">Vision</h1>
            <p className="my-5">
              “By 2022, be the leading Student chapter in mine planning
              scientific and development, focussed on the needs of the mining
              industry.”
            </p>
          </Col>
          <Col>
            <h1 className="text-uppercase text-center">Mission</h1>
            <p className="my-5">
              “To maximise tale an integral approach, and to promote minimum
              research, corresponding to the needs of companies and society.”
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className="text-uppercase text-center">Strategic objectives</h1>
            <ul className="list-unstyled">
              <li className="mb-2 mt-5">
                Strengthen the technical knowledge of students.
              </li>
              <li className="my-2">Promote scientific research in students.</li>
              <li className="my-2">
                Enhance leadership skills and integration among members.
              </li>
              <li className="my-2">
                Student representation skills and prestige to the University.
              </li>
              <li className="my-2">
                Disseminate responsible mining with peruvian society.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bodyX">
        <Timeline />
      </div>
    </div>
  );
};

export default About;
