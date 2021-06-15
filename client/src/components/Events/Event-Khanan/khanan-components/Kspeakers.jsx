import React from "react";
import { Container, Row, Col } from "reactstrap";
import KhananCard from "./k-events/KhananCard";
import S1 from "../khanan-img/vaibhav.PNG";
import S2 from "../khanan-img/jayank.jpeg";
import S3 from "../khanan-img/sukumar.png";
import S4 from "../khanan-img/abani.jpeg";
import S5 from "../khanan-img/amit.PNG";
import { events } from "./k-events/KhananEvent";
import Zoom from "react-reveal/Zoom";

const speakers = [
  {
    title: "Dr Vaibhav Raj",
    src: S1,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "Mr JAYANK SRIVASTAVA",
    src: S2,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "DR. SUKUMAR BANDOPADHYAY",
    src: S3,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "MR. ABANI R SAMAL",
    src: S4,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "MR. AMIT KUMAR",
    src: S5,
    head: "Head Content",
    struct: ["one", "two", "three"],
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
        {speakers.map((item, index) => {
          return (
            <Col xs="12" sm="6" lg="3">
              <Zoom timeout={600}>
                <KhananCard
                  title={item.title}
                  img={item.src}
                  id={index + events.length}
                />
              </Zoom>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Speakers;
export { speakers };
