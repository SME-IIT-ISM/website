import React from "react";
import khananImage from "./image/khanan.jpg";
import Countdown from "./Countdown";
import { Container, Row, Col } from "reactstrap";

const OverlayText = (props) => {
  return (
    <div className="khanan-overlay py-5">
      <h1 className="text-white text-center text-uppercase khanan-content">
        khanan
      </h1>
      <Container className="p-4 rounded khanan-content">
        <Row>
          <Col className="img-container mb-1">
            <img src={khananImage} alt="" />
          </Col>
          <Col className="text-white ">
            <div classname="mt-3">
              <p className="h2 pt-3">
                Participate in the Biggest Mining fest in India and fell into
                the invigorating world of Mining.
              </p>
              <p className="h2">
                You will be provided with a platform that presents your talent
                to the world and help you enhance and learn skills. Many
                esteemed guests are willing to share their knowledge are you
                willing to take it?
              </p>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col className="text-center h1">
            <Countdown />
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default OverlayText;
