import React from "react";
import Error404 from "../../Error404/Error404";
import { Container, Row, Col } from "reactstrap";

const InfoPage = (props) => {
  if (props.infoData === undefined) return <Error404 msg="Unexisting Event" />;

  const src = props.infoData.src;
  const title = props.infoData.title;
  const para = props.infoData.para;
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
      <Row>
        <h5>
          <a href="/resources/ind-info">Back</a>
        </h5>
      </Row>
    </Container>
  );
};

export default InfoPage;
