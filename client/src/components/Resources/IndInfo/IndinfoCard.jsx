import React from "react";
// import SMEGeneralEvents from "./SMEGeneralEvents";
import { Container, Row, Col } from "reactstrap";
import "./indInfo.css";

const InfoCardL = (props) => {
  const title = props.title;
  const para = props.para;
  const src = props.src;
  const id = props.id;
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={src} />
          </Col>
          <Col>
            <Container>
              <Row>
                <Col>{title}</Col>
              </Row>
              <Row>
                <Col>{para}</Col>
              </Row>
              <a
                className="bt bt-blue text-center"
                href={`/resouces/ind-info/${id}`}
              >
                Read More
              </a>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoCardL;
