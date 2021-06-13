import React from "react";
// import SMEGeneralEvents from "./SMEGeneralEvents";
import { Container, Row, Col } from "reactstrap";
import "./indInfo.css";

const InfoCardL = (props) => {
  const title = props.title;
  const para = props.para;
  const src = props.src;
  const id = props.id;
  const cls = props.cls;
  const cli = props.cli;
  return (
    <div>
      <Container>
        <Row className={cls}>
          <Col>
            <img className={cli} src={src} />
          </Col>
          <Col className={cli}>
            <h2>{title}</h2>
            <p>{para}</p>
            <h4>
              <a href={`/resources/ind-info/${id}`}>Read More</a>
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoCardL;
