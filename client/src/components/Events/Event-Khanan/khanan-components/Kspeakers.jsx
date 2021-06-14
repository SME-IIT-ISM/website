import React from "react";
import { Container, Row, Col } from "reactstrap";
import KhananCard from "./k-events/KhananCard";
import S1 from "../khanan-img/vaibhav.PNG";
import S2 from "../khanan-img/jayank.jpeg";
import S3 from "../khanan-img/sukumar.png";
import S4 from "../khanan-img/abani.jpeg";
import S5 from "../khanan-img/amit.PNG";
import Zoom from "react-reveal/Zoom";

const speakers = [
  {
    title: "Dr Vaibhav Raj",
    src: S1,
  },
  {
    title: "Mr JAYANK SRIVASTAVA",
    src: S2,
  },
  {
    title: "DR. SUKUMAR BANDOPADHYAY",
    src: S3,
  },
  {
    title: "MR. ABANI R SAMAL",
    src: S4,
  },
  {
    title: "MR. AMIT KUMAR",
    src: S5,
  },
];

const Speakers = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="k-sub-heading">MEET OUR SPEAKERS</h2>
        </Col>
      </Row>
      <Row>
        {speakers.map((item) => {
          return (
            <Col xs="12" sm="6" lg="3">
              <Zoom timeout={600}>
                <KhananCard title={item.title} img={item.src} />
              </Zoom>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Speakers;
