import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import Timeline from "./Timeline";
import Fade from "react-reveal/Fade";
import { GiBullseye } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { MdNavigation } from "react-icons/md";

const About = () => {
  return (
    <div>
      <div className="about-heading-bg mt-4 d-flex align-items-center justify-content-center">
        <h1 className="page-heading text-center py-3 text-uppercase">
          About Us
        </h1>
      </div>
      <Fade timeout={500} bottom>
        <Container className="my-5">
          <Row>
            <Col>
              <h1 className="text-uppercase text-center heading">Who we are</h1>
              <p className="my-5 content">
                SME IIT(ISM) Students Chapter, an IIT (ISM) Dhanbad student
                chapter of Society for Mining, Metallurgy & Exploration was
                inaugurated in May 2011. It was found with the sole purpose of
                kindling curiosity and interest in the minds of the students of
                ISM about the field of mining engineering. The society
                collectively works in the way of making our presence known to
                the world as a potential body of mining engineers. We serve as
                the interface between our glorious alumni and our student
                members in order to enrich them with our alumni's priceless
                experience and knowledge. The members all aim to inculcate the
                virtues of professional attitude and involvement towards mining.
                We put in our best efforts to provide the members with ample
                global exposure, so that they can learn and adapt themselves
                according to the rapid developments the sector is going through,
                and attain enough self-confidence to walk beside the leaders of
                mining in the world.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Container className="my-5">
        <Row>
          <Col xs="12" md="6" className="text-center">
            <Fade timeout={500} left>
              <FaRegEye className="about-head-icons mb-3" />
              <h1 className="text-uppercase heading">Vision</h1>
              <p className="my-5 content">
                “By 2022, be the leading Student chapter in mine planning
                scientific and development, focussed on the needs of the mining
                industry.”
              </p>
            </Fade>
          </Col>
          <Col xs="12" md="6" className="text-center">
            <Fade timeout={500} right>
              <IoFlag className="about-head-icons mb-3" />
              <h1 className="text-uppercase heading">Mission</h1>
              <p className="my-5 content">
                “To maximise tale an integral approach, and to promote minimum
                research, corresponding to the needs of companies and society.”
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Fade timeout={500} bottom>
        <Container className="my-5">
          <Row>
            <Col className="text-center">
              <GiBullseye className="about-head-icons mb-3" />
              <h1 className="text-uppercase heading">Strategic objectives</h1>
              <ul className="list-unstyled content">
                <li className="mb-2 mt-5">
                  <MdNavigation className="list-bullet-icon" />
                  &nbsp; Strengthen the technical knowledge of students.
                </li>
                <li className="my-2">
                  <MdNavigation className="list-bullet-icon" />
                  &nbsp; Promote scientific research in students.
                </li>
                <li className="my-2">
                  <MdNavigation className="list-bullet-icon" />
                  &nbsp; Enhance leadership skills and integration among
                  members.
                </li>
                <li className="my-2">
                  <MdNavigation className="list-bullet-icon" />
                  &nbsp; Student representation skills and prestige to the
                  University.
                </li>
                <li className="my-2">
                  <MdNavigation className="list-bullet-icon" />
                  &nbsp; Disseminate responsible mining with peruvian society.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fade>
      <div className="bodyX">
        <Timeline />
      </div>
    </div>
  );
};

export default About;
