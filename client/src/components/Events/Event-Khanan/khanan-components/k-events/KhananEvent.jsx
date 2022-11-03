import React from "react";
import { Container, Row, Col } from "reactstrap";
import K1 from "./k-event-images/dezyn o mania.png";
import K2 from "./k-event-images/gamicon.png";
import K3 from "./k-event-images/tech expo1.png";
import K4 from "./k-event-images/khanan mafia.png";
import K5 from "./k-event-images/minnovare.jpg";
import K6 from "./k-event-images/nirvana.png";
import K7 from "./k-event-images/placement fever.png";
import K8 from "./k-event-images/quizzine.png";
import K10 from "./k-event-images/LisCad.png";
import K9 from "./k-event-images/O-piblast.png";
import K11 from "./k-event-images/kalakriti.jpg";
import KhananCard from "./KhananCard";
import Zoom from "react-reveal/Zoom";

const events = [
  {
    title: "TEXMiN TechExpo",
    src: K3,
    struct: [
      "As the vibe of Khanan 22 begins to spread in the air, TEXMIN brings an event Tech Expo. TEXMIN incubated start-ups and companies will exhibit their projects that are running under TEXMIN in the Centre of Research Excellence building Projects of undergraduate as well as postgraduate students will be showcased there. Those projects are equipped with leading technologies associated with the mining industry io. Virtual Reality Simulators, Advanced Sensor Technology, etc. Guests will first witness the advanced projects then they will proceed further.",
    ],
    srclink: "https://docs.google.com/forms/d/e/1FAIpQLSdvfcuZouE7Kv9RZcvl4kix2HE7FFtTp65nbm3p2EQj3hG9jw/viewform",
    zoomlink: "",
    con: false,
  },
  {
    title: "Dezyno-o-mania",
    src: K1,
    struct: [
      "In this one of a kind event organised in collaboration with Coal India Innovation and Incubation Center at BIT ISM, students will have to think over an industrial grade designing problem faced in the mining industry. Solutions provided by the students would help in reinventing the scenarios of safety, efficiency. ergonomics and throughput in the mining machineries. Selected students will get a chance to construct physical models of their designs using the facilities at the CIIC and IIT ISM workshops",
    ],
    srclink:
    "https://docs.google.com/forms/d/e/1FAIpQLSe3sIF2TwRn4GecautEBiMNoyLo9QQ-zmAhQrwCU4vb1l752w/viewform",

    con: false,
  },
  {
    title: "Nirvana",
    src: K6,
    struct: [
      "For any Mining Engineer, it is crucial to get an insight into real-life problems before entering the field. This event aims to provide exposure to real-life mining problems and extract some out-of-the-box ideas from aspiring students. Like every year, this year's Nirvana is going to be an exciting opportunity to showcase the best ideas to solve the most intriguing problems concerning the mining industry and the allied areas. The problem statements come directly from the professionals and professors who have immense knowledge in their field. This event will be conducted in two rounds. First round is an online abstract submission, in which participants need to submit their abstract solutions. Selected candidates will then be called for the presentation round during Khanan.",

    ],

    srclink:
    "https://docs.google.com/forms/d/e/1FAIpQLSfoZuYUS1yrGvRANQT43LkXdzKsPNGFe73aJdWCIzWWhciV_A/viewform",
    zoomlink: "https://meet.google.com/ipb-tdeo-kdy",
    con: false,
  },
  {
    title: "Gamicon",
    src: K2,
    struct: [
      "The entire idea of accomodating the gaming events into our spectrum of events which comprise of primarily Technical Events with formal rules can be encapsulated under two reasons: firstly the presence of gaming events let the people participating in the formal events have a break and the second is to make them realise how skills like focus teamwork and dedication towards the work can do wonders. The very essence of human existence is the survival with coordination.",
    ],
    srclink:
        "https://docs.google.com/forms/d/e/1FAIpQLSf_27zolYuP-z2hEWkLrDSyBAXGQrmfXO56t-_jG0JxeAghMA/viewform",
        zoomlink: "",
    con: false,
  },



  {
    title: "Envisage",
    src: K5,
    struct: [
      `All creation is a mine, and every man a miner.`,
      "And to make that miner find gold, he needs to be skill-ready for the industry. Khanan'22 presents a case study event designed to introduce the participants to the industrial problems challenging their basic instinct as an engineer to develop something out of nothing. This event aims to provide exposure to real-life industrial design mining problems to push the students to think beyond the conventional and to improve their perspectives",

    ],
    srclink:
    "https://docs.google.com/forms/d/e/1FAIpQLSeQNAEhJEplkbzCeGPukq2S7jR1buNwDtK4-YJKxEjLHO6XMQ/viewform",
    zoomlink: "https://meet.google.com/ttx-zmfa-bvw",
    con: false,
  },

  {
    title: "Placement Fever",
    src: K7,
    struct: [
     ` Even the wittiest of the brains are occupied by the nervousness.
     `,
     "monkey during the placement session. The only way to secure it off is by introducing the monster of confidence. Believe that by targeting and setting daily goals, one can surely secure a deserving job through on-campus placements. This could be easily done by relentless practice of the placement affairs to build confidence in their own abilities. So find this as an opportunity to reward yourself. This event aims to put students through a simulated version of campus placements process. Beginning with an aptitude process, participants will go on to appear for group discussions and eventually sit for personal interviews.",
    ],

    srclink: "https://docs.google.com/forms/d/e/1FAIpQLScULOavycrVwmCSPDJfTcqrluVgr-kSmYuCubDn6W-_TPLo_w/viewform?usp=sf_link",
    zoomlink: "https://meet.google.com/kvx-demi-pzy",
    con: false,
  },
  {
    title: "Quizzine",
    src: K8,
    struct: [
      "Curiosity is the ability to seek and acquire knowledge, skill, and way of understanding the world. It is at the heart of what motivates young people to learn and what keeps them learning through out their lives. Quizzine is opening a huge opportunity for those curious miner to explore the knowledge of mines. This event definitely will improve accuracy and spood of the participants perspectives.",
    ],

    srclink:
    "https://docs.google.com/forms/d/e/1FAIpQLSeS3GmDCxwvLhIguftjaGfTiG36Agag2za15C-_4DFbCXDedA/closedform",
    zoomlink: "https://meet.google.com/fcf-zttd-xew",
      con: false,},
  {
    title:"Kalakriti",
    src:K11,
    struct:[
      "Kalakriti has been created with the pure intent of giving every child a chance at discovering their artistic talent, while instilling in them an interest towards the mining industry, thereby inspiring these young minds to become the leaders of change in the future. Children from all over the country, irrespective of their economic or social status are encouraged to participate at this event, all the while promoting a sense of love and harmony and eliminating feelings of distrust.",

],
srclink:"https://docs.google.com/forms/d/10UCKK5M-FFuQf9SxNBl3wpVw9gDJuoV73xdBwHYtWA4/viewform?edit_requested=true"
  },

  {
    title: "Panel discussion",
    src: K10,
    struct: [
     "Khanan ushers in a panel discussion for all where two panels will be there putting forth their views on various topics being presented on the spot. It will basically include a moderator who guides the discussion and sometimes elicits audience questions with the goal of being informative and entertaining Each panel will consist of four members out of which one will bo the professor of our college and the remaining three will be professionals from various domains accompanying him for analyzing and responding to various mining related problems and ultimately landing with an appropriate solution to it. It will bo a two day event, each day representing different panels on different thomos Students can horoby attend and grace the event as it will be very much informative and knowledgeable for them in their near future. The audience, nonetheless, can also participate by responding and suggesting their own logical and creative ideas to the various themes and topics discussed.",
    ],

    srclink: "https://docs.google.com/forms/d/e/1FAIpQLSeXZdpp5qs4tG2FERK-lnpiPrk1MUxtv1rPM1uLQu238t4odg/viewform",
    zoomlink: "https://us02web.zoom.us/j/83922869325?pwd=WXFFeFNnNDUzUjdFMjVsZ21aQVNRZz09",
    con: false,
  }
];

const Kevent = () => {
  return (
    <Container id="events">
      <Row>
        <Col>
          <h2 className="k-sub-heading mt-5">EVENTS</h2>
        </Col>
      </Row>
      <Row>
        {events.map((item, index) => {
          return (
            <Col xs="12" sm="6" lg="4" key={index} >
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
