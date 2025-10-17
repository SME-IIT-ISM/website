import React, { useEffect } from "react";
import "./about.css";
import { Container, Row, Col, Card } from "reactstrap";
import Timeline from "./Timeline";
import Fade from "react-awesome-reveal";
import { GiBullseye } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { MdNavigation } from "react-icons/md";

const About = () => {
  useEffect(() => {
    document.title = "About Us - SME IIT ISM";
  }, []);

  return (
    <div className="about-page">
      {/* 🌈 Gradient Header */}
      <div className="about-heading-bg mt-4 d-flex align-items-center justify-content-center">
        <h1 className=" text-center py-3 text-uppercase about-heading ">
          About Us
        </h1>
      </div>

      {/* 🧠 Who We Are Section */}
      <Fade bottom>
        <Container className="my-5">
          <Card className="p-5 shadow-lg border-0 rounded-4 about-card">
            <h1 className="text-uppercase text-center heading mb-4 gradient-text">
              Who We Are
            </h1>
            <p className="my-3 content text-center">
              SME IIT(ISM) Students Chapter, an IIT (ISM) Dhanbad student
              chapter of the Society for Mining, Metallurgy & Exploration was
              inaugurated in May 2011. It was founded with the sole purpose of
              kindling curiosity and interest in the minds of students about the
              field of mining engineering. The society collectively works toward
              making our presence known to the world as a potential body of
              mining engineers.
            </p>
            <p className="my-3 content text-center">
              We serve as the interface between our glorious alumni and our
              student members, enriching them with priceless experience and
              knowledge. Our mission is to provide global exposure, cultivate
              leadership, and build confidence so that every member can walk
              beside the leaders of mining worldwide.
            </p>
          </Card>
        </Container>
      </Fade>

      {/* 👁️ Vision & Mission */}
      <Container className="my-5">
        <Row>
          <Col xs="12" md="6" className="text-center">
            <Fade left>
              <Card className="p-4 shadow about-card gradient-border">
                <FaRegEye className="about-head-icons mb-10 gradient-icon" />
                <h1 className="text-uppercase heading gradient-text">Vision</h1>
                <p className="my-3 content">
                  “By 2025, to be the leading student chapter in mining planning,
                  scientific advancement, and innovation — empowering future
                  leaders of the mining industry.”
                </p>
              </Card>
            </Fade>
          </Col>
          <Col xs="12" md="6" className="text-center">
            <Fade right>
              <Card className="p-4 shadow about-card gradient-border ">
                <IoFlag className="about-head-icons mb-3 gradient-icon" />
                <h1 className="text-uppercase heading gradient-text">
                  Mission
                </h1>
                <p className="my-3 content">
                  “To nurture curiosity, promote research, and build
                  professionals ready to meet the evolving needs of mining
                  companies and society with integrity and innovation.”
                </p>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>

      {/* 🎯 Strategic Objectives */}
      <Fade bottom>
        <Container className="my-5">
          <Card className="p-5 shadow-lg about-card gradient-border">
            <div className="text-center">
              <GiBullseye className="about-head-icons mb-3 gradient-icon" />
              <h1 className="text-uppercase heading gradient-text">
                Strategic Objectives
              </h1>
            </div>
            <ul className="list-unstyled content mt-4">
              {[
                "Strengthen the technical knowledge of students.",
                "Promote scientific research among members.",
                "Enhance leadership and team collaboration skills.",
                "Build strong student representation and university prestige.",
                "Promote responsible and sustainable mining practices.",
              ].map((objective, i) => (
                <li key={i} className="my-3 d-flex align-items-center">
                  <MdNavigation className="list-bullet-icon gradient-icon me-2" />
                  {objective}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Fade>

      {/* 🏆 Achievements */}
      <div className="bodyX">
        <h1 className="pt-4 text-center heading gradient-text">
          Achievements
        </h1>
        <Timeline />
      </div>
    </div>
  );
};

export default About;
