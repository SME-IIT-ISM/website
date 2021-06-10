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

const events = [
  {
    title: "datagenix",
    src: K1,
  },
  { title: "gamicon", src: K2 },
  {
    title: "ideate",
    src: K3,
  },
  {
    title: "khanan-mafia",
    src: K4,
  },
  {
    title: "minnovare",
    src: K5,
  },
  {
    title: "nirvana",
    src: K6,
  },
  {
    title: "placement fever",
    src: K7,
  },
  {
    title: "quizzine",
    src: K8,
  },
  {
    title: "workshop ",
    src: K9,
  },
];

const Kevent = () => {
  return (
    <Container id="events">
      <Row>
        {events.map((item) => {
          return (
            <Col xs="12" sm="6" lg="4">
              <KhananCard title={item.title} img={item.src} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Kevent;
