import React from "react";
import { Container, Row, Col } from "reactstrap";

const Campus = () => {
  return (
    <Container className="campus my-5" id="campus">
      <Row>
        <Col className="campus-text p-3">
          <p>
            Looking for a chance to lead your college? Register for campus
            ambassador now and get a chance to be an extended part of organizing
            team of KHANAN'20. Here we offer you a chance to represent your
            college and get acknowledged for this enthusiastic work. All you
            have to do is lead the contingent from your college and make sure
            everyone there gets to know about it. Bear the responsibility and
            get ready for a thrilling experience.
          </p>
          <div>
            <a
              className="bt custom-button-campus"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Campus;
