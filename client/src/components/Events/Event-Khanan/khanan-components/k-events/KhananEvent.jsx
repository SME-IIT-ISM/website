import React from "react";
import { Container, Row, Col } from "reactstrap";
import K1 from "./k-event-images/datagenix.jpg";
import K2 from "./k-event-images/gamicon.jpg";
import K3 from "./k-event-images/ideate.jpg";
import K4 from "./k-event-images/khanan mafia.jpg";
import K5 from "./k-event-images/minnovare.jpg";
import K6 from "./k-event-images/nirvana.jpg";
import K7 from "./k-event-images/placement fever.jpg";
import K8 from "./k-event-images/quizzine.jpg";
import K9 from "./k-event-images/workshop.jpg";
import KhananCard from "./KhananCard";
import Zoom from "react-reveal/Zoom";

const events = [
  {
    title: "datagenix",
    src: K1,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "gamicon",
    src: K2,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "ideate",
    src: K3,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "khanan-mafia",
    src: K4,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "minnovare",
    src: K5,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "nirvana",
    src: K6,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "placement fever",
    src: K7,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "quizzine",
    src: K8,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
  {
    title: "workshop ",
    src: K9,
    head: "Head Content",
    struct: ["one", "two", "three"],
  },
];

const Kevent = () => {
  return (
    <Container id="events">
      <Row>
        {events.map((item, index) => {
          return (
            <Col xs="12" sm="6" lg="4" key={index}>
              <Zoom timeout={600}>
                <KhananCard title={item.title} img={item.src} id={index} />
              </Zoom>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Kevent;
export { events };
