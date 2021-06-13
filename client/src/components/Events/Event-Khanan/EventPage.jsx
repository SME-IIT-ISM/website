import React from "react";
import Error404 from "../../Error404/Error404";
import { Container, Row, Col } from "reactstrap";

const EventPage = (props) => {
  if (props.eventData === undefined) return <Error404 msg="Unexisting Event" />;
  //   const src = props.eventData.src;
  const title = props.eventData.title;
  const src = props.eventData.src;
  const para = props.eventData.para;

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <img src={src} />
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{para}</p>
          <div>
            <a href="/events/khanan">Back</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EventPage;
