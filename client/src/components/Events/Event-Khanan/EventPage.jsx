import React from "react";
import Error404 from "../../Error404/Error404";
import { Container, Row, Col } from "reactstrap";
import Particles from "./Particles";

const EventPage = (props) => {
  if (props.eventData === undefined) return <Error404 msg="Unexisting Event" />;

  const title = props.eventData.title;
  const src = props.eventData.src;
  const struct = props.eventData.struct;

  return (
    <div style={{ backgroundColor: "black" }}>
      <Particles />
      <Container
        className="pb-5 events-page-khanan"
        style={{ paddingTop: "150px", position: "relative" }}
      >
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            xs="12"
            lg="9"
            xl="8"
            className="d-flex align-items-center justify-content-center"
          >
            <img className="events-page-image" src={src} alt={title} />
          </Col>
        </Row>
        <Row className="mt-4 d-flex align-items-center justify-content-center">
          <Col className="text-center" xs="12" lg="9" xl="8">
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row className="mt-4 d-flex align-items-center justify-content-center">
          <Col xs="12" lg="9" xl="8" className="content-bg px-3">
            {struct.map((item, id) => {
              return (
                <p key={id} className="mt-4 content">
                  {item}
                </p>
              );
            })}
          </Col>
        </Row>
        {/* <Row className="mt-4 d-flex align-items-center justify-content-center">
          <Col xs="12" md="6" lg="4" className="text-center">
            <div>
              <a
                className="bt bt-white text-center"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </div>
          </Col>
          <Col xs="12" md="6" lg="5" xl="4" className="text-center text-white mt-4">
            <b>
              <p>Time: {time}</p>
              <p>Date: {date}</p>
              <p>Contact on:</p>
              <p>{contact1}</p>
              <p>{contact2}</p>
            </b>
          </Col>
        </Row> */}
        <Row className="mt-5 d-flex align-items-center justify-content-center">
          <Col xs="12" lg="9" xl="8">
            <div>
              <a href="/events/khanan" className="event-back-btn">
                Go Back
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventPage;
