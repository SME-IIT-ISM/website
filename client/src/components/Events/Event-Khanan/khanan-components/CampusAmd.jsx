import React from "react";
import { Container, Row, Col } from "reactstrap";

const Campus = () => {
  return (
    <Container className="campus my-5" id="campus">
      <Row>
        <Col className="campus-text p-3">
          <p>
            Looking for a chance to lead your college? Register for <b><l>CAMPUS
            AMBASSADOR</l></b> now and get a chance to be an extended part of organizing
            team of KHANAN'23. Here we offer you a chance to represent your
            college and get acknowledged for this enthusiastic work. All you
            have to do is lead the contingent from your college and make sure
            everyone there gets to know about it. Bear the responsibility and
            get ready for a thrilling experience.
          </p>
          <div>
            <a
              className="bt custom-button-campus"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdqvazckflfMZYczAElHJPC1F4pzu1j3DwMzEqvNt_wzMqVOQ/formResponse"
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
