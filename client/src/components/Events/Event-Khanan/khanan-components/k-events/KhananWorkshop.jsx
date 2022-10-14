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
    title: "Session on Automation in Mine Process",
    src: K1,
    struct: [
      "Hey Cinephiles!",
      `KHANAN'21 brings the “TWIST A TALE” contest for all the movie buffs who wish to showcase their creativity and step into the shoes of scriptwriters.
      `,
      "The rules are pretty simple. You have to pick any one movie or web series of your liking from the list of 5 twisted plots that we provide. That is, we'll change one major event in the plot and you have to make use of your creativity and imagination to make the story reach its satisfactory conclusion. The ones with the most gripping and exciting plots win!!!",
      "Rules:",
      "NOTE: Participants have to register (https://forms.gle/fC1Nq71Mg98PEb8p7) for the event before 08:00 PM on 8th October, 2021.",
      "1) Participants will have to choose one of the five options for movies/series with changed plot provided to them at the beginning of the contest.",
      "2) Participants will have to bring it to a satisfactory and exciting conclusion.",
      "3) Participants should refrain from introducing a completely new major character in the story line. Not to mention, the basic setting of the story should be kept the same to keep intact the original essence of the story.",
      "4) Word limit will be 1000-1500 words.",
      "5) A Google Form will be provided to the registered participants via mail and WhatsApp at the time of event which will have the link to questions and for uploading the story. The event will start at 12 noon on 11th of October and will continue up to 2 PM.",
      "6) Typed entries in English shall be accepted and should be submitted in pdf format.",
      "7) Indulgence in any kind of plagiarism will result in direct disqualification from the contest.",
      "Judging criteria:",
      "Adherence to word limit: 10%",
      "Consistency of storyline and characters with original: 20%",
      "Quality of build-up and character development: 40%",
      "Conclusion: 30%",
      "So, what are you waiting for? Give the scriptwriter inside you the chance to shine out by imagining the best conclusion!",
      "Register for the contest Now!!!",
      "Contact:",
      "Abhya Adri (Event Coordinator): 6206688440",
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
