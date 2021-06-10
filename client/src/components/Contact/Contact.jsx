import React from "react";
import Form from "./Form";
import "./contact.css";
import { MDBContainer, MDBIframe } from "mdbreact";
import { Container, Row, Col } from "reactstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="heading">
        <h1 className="text-uppercase text-center">Contact Us</h1>
      </div>
      <Container className="shadow pb-4 mb-5 bg-white rounded contact">
        <Row className="bg-white rounded mt-5">
          <Col className="p-5">
            <Form />
          </Col>
          <Col className="contact-section p-5">
            <h2 className="text-uppercase text-center">Contact Info</h2>

            <ul className="list-unstyled mb-0">
              <li className="mb-3 mt-4">
                <FaMapMarkerAlt /> Department of Mining Engineering, IIT (ISM)
                Dhanbad, Hirapur, Sardar Patel Nagar, Dhanbad, Jharkhand 826004
              </li>
              <li className="mb-3">
                <FaPhoneAlt /> Phone: +91 7297812986
              </li>
              <li className="mb-3">
                <FaEnvelope /> Email: smeiitismstudentchapter@gmail.com
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="map-container mt-5 mb-4">
          <Col>
            <MDBContainer className="map-container ">
              <MDBIframe
                height={300}
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.13244169905042!2d86.44100069931935!3d23.81436469595872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd1a93a872d5%3A0xa1548ad737490192!2zMjPCsDQ4JzUxLjgiTiA4NsKwMjYnMjcuOSJF!5e0!3m2!1sen!2sin!4v1622840483342!5m2!1sen!2sin"
              />
            </MDBContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
