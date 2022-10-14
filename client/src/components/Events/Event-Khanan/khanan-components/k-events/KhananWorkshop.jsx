import React from "react";
import { Container, Row, Col } from "reactstrap";
import K1 from "./k-workshop-images/samp.jpeg";
import K2 from "./k-event-images/gamicon.jpg";
import K3 from "./k-event-images/ideate.jpg";
import K4 from "./k-event-images/khanan mafia.jpg";
import K5 from "./k-event-images/minnovare.jpg";
import K6 from "./k-event-images/nirvana.jpg";
import K7 from "./k-event-images/placement fever.jpg";
import K8 from "./k-event-images/quizzine.jpg";
import K10 from "./k-event-images/LisCad.png";
import K9 from "./k-event-images/O-piblast.png";
import K11 from "./k-event-images/kalakriti.jpg";
import KhananCard from "./KhananCard";
import {speakers} from "../Kspeakers.jsx";
import {events} from "./KhananEvent.jsx";
import {preevents} from "../PreEvent.jsx";


import Zoom from "react-reveal/Zoom";

const workshop = [
  {
    title: "Session on Automation in Mining Process",
    src: K1,
    struct: [
    "Hey Cinephiles!",
      "Join us to know more about Automation in Mining Process",
      "Venue: SMAC, TEXMiN, 3rd Floor, CRE Building, IIT (ISM) ",
      "Contact:",

      "Ayushman Tiwari (Event Organiser): 7470584535",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeT2jUTvYsb-1tr0MCiXkhPVWMHCFOge6IDfWqKCev3REeGaQ/viewform",
    zoomlink: " https://meet.google.com/dmf-ihim-add",
    con: false,
  },

];

const Kworkshop = () => {
  return (
    <Container id="events">
      <Row>
        <Col>
          <h2 className="k-sub-heading mt-5">WORKSHOP</h2>
        </Col>
      </Row>
      <Row>
        {workshop.map((item, index) => {
          return (
            <Col xs="12" sm="6" lg="4" key={index+events.length+speakers.length+preevents.length} >
              <Zoom timeout={600}>
                <KhananCard title={item.title} img={item.src} id={index+events.length+speakers.length+preevents.length} />
              </Zoom>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Kworkshop;
export { workshop };
