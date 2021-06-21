import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./indInfo.css";

const InfoCardL = (props) => {
  const title = props.title;
  const para = props.para;
  const src = props.src;
  const id = props.id;
  const cls = props.cls;
  const date = props.date;
  return (
    <Container>
      <Row className={`${cls} flex-column flex-md-row`}>
        <Col>
          <img src={src} alt="" />
        </Col>
        <Col className="pt-4">
          <h3>{title}</h3>
          <p>
            {para}, {date}
          </p>
          <h5>
            <a href={`/resources/ind-info/${id}`}>Read More</a>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoCardL;
