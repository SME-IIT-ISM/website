import React from "react";
import Error404 from "../../Error404/Error404";
import { Container, Row, Col } from "reactstrap";
import Title from "../../PageTitle";

const InfoPage = (props) => {
  if (props.infoData === undefined) return <Error404 msg="Unexisting Event" />;

  const src = props.infoData.src;
  const title = props.infoData.title;
  const para = props.infoData.para;
  const describe = props.infoData.describe;
  const quotes = props.infoData.quotes;
  const date = props.infoData.date;
  return (
    <Container className="mt-5 mb-5 events-page">
      <Title pageTitle={`${title} - Industrial Info`} />
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
          <h1 className="heading">{title}</h1>

          <p className="mt-4  content">{para}</p>
          <p className="mt-4 content">{date}</p>
          <p className="mt-4 content quotesInfo">{quotes}</p>
          <p className="mt-4 content ">{describe}</p>
        </Col>
      </Row>
      <Row className="mt-5 d-flex align-items-center justify-content-center">
        <Col xs="12" lg="9" xl="8">
          <h5>
            <a href="/resources/ind-info">Go Back</a>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoPage;
