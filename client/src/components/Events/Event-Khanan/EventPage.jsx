import React from "react";
import Error404 from "../../Error404/Error404";
import { Container, Row, Col } from "reactstrap";
import Particles from "./Particles";

const EventPage = (props) => {
  if (props.eventData === undefined) return <Error404 msg="Unexisting Event" />;

  const title = props.eventData.title;
  const src = props.eventData.src;
  const para = props.eventData.para;

  return (
<<<<<<< HEAD
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
=======
    <div style={{ backgroundColor: "black" }}>
      <Particles />
      <Container style={{ paddingTop: "150px", position: "relative" }}>
        <Row>
          <Col>
            <h1 className="text-center">{title}</h1>
            <img src={src} alt={title} />
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
    </div>
>>>>>>> 884e002c3b0aba2e1ad609f9f31ca522971eb4e5
  );
};

export default EventPage;
