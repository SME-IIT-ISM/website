import React, { useEffect } from "react";
import Error404 from "../../Error404/Error404";
import { Container, Row, Col } from "reactstrap";

const EventPage = ({ eventData }) => {
  const src = eventData?.src;
  const title = eventData?.title;
  const head = eventData?.head;
  const struct = eventData?.struct;
  const date = eventData?.date;
  const contact1 = eventData?.contact1;
  const contact2 = eventData?.contact2;
  const tab = eventData?.tab;

  useEffect(() => {
    if (eventData === undefined) return <Error404 msg="Unexisting Event" />;

    document.title = `${title} - General Events - SME IIT ISM`;
  }, []);

  return (
    <Container className="mt-5  mb-5 events-page">
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
      <Row className="mt-5 d-flex align-items-center justify-content-center">
        <Col className="text-center" xs="12" lg="9" xl="8">
          <h1>{title}</h1>
          <p className="mt-4 content">{head}</p>
        </Col>
      </Row>
      <Row className="mt-4 d-flex align-items-center justify-content-center">
        <Col xs="12" lg="9" xl="8">
          {struct.map((item, id) => {
            return (
              <p key={id} className="mt-4 content">
                {item}
              </p>
            );
          })}
        </Col>
      </Row>
      <Row className="mt-4 d-flex align-items-center justify-content-center">
        <Col xs="12" md="6" lg="4" className="text-center">
          {tab === "Upcoming" && (
            <div>
              <a
                className="bt bt-blue text-center"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </div>
          )}
        </Col>
        <Col xs="12" md="6" lg="5" xl="4" className="text-center mt-4">
          <b>
            <p>Date: {date}</p>
            <p>Contact on:</p>
            <p>{contact1}</p>
            <p>{contact2}</p>
          </b>
        </Col>
      </Row>
    </Container>
  );
};

export default EventPage;
