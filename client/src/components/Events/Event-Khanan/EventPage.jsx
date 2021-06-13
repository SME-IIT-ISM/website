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
  );
};

export default EventPage;
