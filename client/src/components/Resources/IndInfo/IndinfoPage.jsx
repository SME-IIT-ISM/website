import React from "react";
import Error404 from "../../Error404/Error404";
import { Container, Row, Col } from "reactstrap";

const InfoPage = (props) => {
  if (props.eventData === undefined) return <Error404 msg="Unexisting Event" />;

  const src = props.eventData.src;
  const title = props.eventData.title;
  const para = props.eventData.para;
  return (
    <Container className="mt-5 mb-5 events-page">
      <Row>
        <Col className="justify-content-center">
          <img className="events-page-image" src={src} alt={title} />
        </Col>
        <h1>{title}</h1>
      </Row>
      <Row>
        <Col>
          <p>{para}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoPage;
