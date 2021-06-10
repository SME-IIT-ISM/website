import React from "react";
import ReactPlayer from "react-player/youtube";
import { Container, Row, Col } from "reactstrap";

const YouTube = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="12" md="10" xl="9">
          <div className="yt-player-wrapper">
            <ReactPlayer
              className="yt-player"
              url="https://youtu.be/zAXGRM9VWmM"
              controls={true}
              width="100%"
              height="100%"
              pip={true}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default YouTube;
