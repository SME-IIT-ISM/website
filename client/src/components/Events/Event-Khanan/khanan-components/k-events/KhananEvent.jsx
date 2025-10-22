import React from "react";
import { Container, Row, Col } from "reactstrap";
import K1 from "../Khanan-sposnors-2k24/war-o-words25.png";
import K2 from "../Khanan-sposnors-2k24/gamicon25.png";
import K12 from "../Khanan-sposnors-2k24/gamicon2.jpg";
import K3 from "../Khanan-sposnors-2k24/deyzno-mania25.png";
import K4 from "../Khanan-sposnors-2k24/khananmafia25.png";
import K5 from "../Khanan-sposnors-2k24/mineolympaid25.png";
import K6 from "../Khanan-sposnors-2k24/nirvana25.png";
import K7 from "../Khanan-sposnors-2k24/placementfever.png";
import K8 from "../Khanan-sposnors-2k24/quizzine25.png";
import K11 from "../Khanan-sposnors-2k24/25.png";
import KhananCard from "./KhananCard";
import Zoom from "react-awesome-reveal";

const events = [
  {
    title: "War O Words",
    src: K1,
    struct: [
      "Get ready to unearth innovation at The Next Big Thing in Khanan'25. Join the battle of wits with engineering prodigies as you showcase your visionary ideas. This platform ignites creativity, sparking an exchange of game-changing concepts for your dream company. Don't miss your chance to be part of the future – Khanan'25 awaits your brilliance!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfHYRD3G0Ad1l0Yfr1TGi_0p3pLgVI25GXLBTu74rwm_chw3g/viewform",
    zoomlink: "",
    con: false,
  },
  {
    title: "Dezyn O Mania",
    src: K3,
    struct: [
      "Embark on a mining innovation journey with Mine Designothon at Khanan '25. This exhilarating 36-hour hackathon challenges students to design optimal mine solutions. It all begins on the event's website with an intriguing predicament unveiling. Collaborate with peers, brainstorm ideas, and explore diverse possibilities to craft viable answers. Your hard work culminates in a meticulous assessment by a selective jury, ensuring fair and accurate evaluation. Join this intellectual quest to showcase your mining prowess and innovative spirit. Khanan '25 – where innovation converges with mining excellence! Don't miss this opportunity to make your mark.",
    ],
    srclink:
      "https://docs.google.com/forms/d/1FKB5cBwmVi2hkZe_F1X2oQGc2B7DiaAKs1gnuN-jyIk/edit",

    con: false,
  },
  {
    title: "Nirvana",
    src: K6,
    struct: [
      "Dive into innovation at Nirvana, the crown jewel of Khanan'25 – IIT ISM Dhanbad's Geo Mining Fest! Unleash your brilliance in the mining industry's epicenter. Nirvana presents a dual-track adventure. Choose to conquer Khanan's challenges head-on or forge your own path with tailored solutions. Our expert-curated problem statements are a testament to excellence, guided by the sharpest minds in the field. Join us for a seismic shift in mining innovation. Don't miss your chance to shine at Nirvana, where groundbreaking ideas light up the future. Secure your spot at Khanan'25 and be part of the geological revolution!",
    ],

    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfg6qnzRLoE5mb18B_b-7F3GMik4hgJVYGvVwa4MJ2jI0U2AQ/viewform",
    con: false,
  },
    {
    title: "Gamicon ",
    src: K2,
    struct: [
      "Get ready to level up your Khanan'25 experience at Gamicon! Trade your tie for a controller, and heels for a comfy spot as we transform the formal into the fantastic. Dive into virtual adventures and showcase your gaming prowess on two consecutive nights of non-stop fun! Join us in this game-based oasis, where fun knows no bounds. It's your golden ticket to a world where the night lights up with gaming fever. Don't miss out on the ultimate fusion of formal and gaming – Gamicon at Khanan'25!",
    ],
    srclink:
      "https://docs.google.com/forms/d/1jWs0h7AtgSEzaO2CpWVw4m8FhGhvV3X0P4GlKW7aDyg/edit",
    con: false,
  },
  {
    title: "Gamicon 2.0",
    src: K12,
    struct: [
      "Get ready to level up your Khanan'25 experience at Gamicon! Trade your tie for a controller, and heels for a comfy spot as we transform the formal into the fantastic. Dive into virtual adventures and showcase your gaming prowess on two consecutive nights of non-stop fun! Join us in this game-based oasis, where fun knows no bounds. It's your golden ticket to a world where the night lights up with gaming fever. Don't miss out on the ultimate fusion of formal and gaming – Gamicon at Khanan'25!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdBkWA-BmbcLXgKIz-YNG_ntxFsjPTNAvRAY-ebIoUIoSxmtw/viewform?usp=header",
    con: false,
  },
  
  {
    title: "Khanan Mafia",
    src: K4,
    struct: [
      " Unearth hidden treasures and unravel mysteries at Khanan '25, IIT ISM Dhanbad's annual geo-mining fest! The notorious Khanan Mafia treasure hunt is back, promising an exhilarating adventure for those with sharp logic and deduction skills. Dive into a world of intrigue, strategy, and cunning as you navigate through thrilling twists and turns. Picture yourself at the heart of the action, forging alliances and unveiling secrets in a battle of wits like no other. Experience Khanan '25 in a whole new light with Khanan Mafia – where mystery and strategy collide for an unforgettable ride!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd7UoiWU1DSdxLloiWEUwEb-D-GZNGopwgb84ykOG71kIX46w/viewform?usp=dialog",
    zoomlink: "",
    con: false,
  },
  {
    title: "Mining Olympiad",
    src: K5,
    struct: [
      "Fuel your curiosity at Mining Olympiad, a thrilling event at Khanan'25! Prepare for an epic challenge, showcasing your mining expertise and skills. Join us to promote mining studies, careers, and global awareness. Quizzine offers mining enthusiasts a chance to shine and test their knowledge. Unearth your potential at Mining Olympiad – where knowledge meets excitement!",
    ],
    srclink:
      "https://forms.gle/UdMuXYosNjBJxHdu6",
    con: false,
  },

  {
    title: "Placement Fever",
    src: K7,
    struct: [
      "The Khanan Family believes in the wise saying of Bruce Garrabrandt- Creativity doesn’t wait for that perfect moment. It fashions its own perfect moments out of ordinary ones.” Therefore, recognizing your remarkable ingenuity and creativity, we are returning with our exceptional event- PLACEMENT FEVER. Placement fever showcases both your quantitative and qualitative skills, offering substantial guidance on how to strategically engage with companies, thereby solidifying your reputation in a specific domain and enhancing your self-assurance and competencies. Participating in this activity will provide extensive assistance, serving as a means to better understand how to navigate the corporate landscape. Embrace this chance as a self-rewarding opportunity. The event's intention is to immerse students in a simulated rendition of the campus placement process.",
    ],

    srclink:
      "https://forms.gle/kK2EbNMNH9DBcw8ZA",
    con: false,
  },
  {
    title: "Quizzine",
    src: K8,
    struct: [
      "Join the Quizzine extravaganza at Khanan'25, IIT ISM Dhanbad's annual geo mining fest, organized in collaboration with Quiz Club! Challenge yourself with a General Quiz that covers science, tech, music, and more. Let's unearth knowledge, ignite curiosity, and compete for glory, all while making memories one question at a time. Are you ready for the challenge?",
    ],

    srclink:
      "https://forms.gle/n2A1ZchGPZTgfQxb8",
    con: false,
  },
  {
    title: "Kalakriti",
    src: K11,
    struct: [
      "Kalakriti has been created with the pure intent of giving every child a chance at discovering their artistic talent, while instilling in them an interest towards the mining industry, thereby inspiring these young minds to become the leaders of change in the future. Children from all over the country, irrespective of their economic or social status are encouraged to participate at this event, all the while promoting a sense of love and harmony and eliminating feelings of distrust.",
    ],
    srclink: "#",
  },

  // {
  //   title: "Panel discussion",
  //   src: K10,
  //   struct: [
  //    "Khanan ushers in a panel discussion for all where two panels will be there putting forth their views on various topics being presented on the spot. It will basically include a moderator who guides the discussion and sometimes elicits audience questions with the goal of being informative and entertaining Each panel will consist of four members out of which one will bo the professor of our college and the remaining three will be professionals from various domains accompanying him for analyzing and responding to various mining related problems and ultimately landing with an appropriate solution to it. It will bo a two day event, each day representing different panels on different thomos Students can horoby attend and grace the event as it will be very much informative and knowledgeable for them in their near future. The audience, nonetheless, can also participate by responding and suggesting their own logical and creative ideas to the various themes and topics discussed.",
  //   ],

  //   srclink: "https://docs.google.com/forms/d/e/1FAIpQLSeXZdpp5qs4tG2FERK-lnpiPrk1MUxtv1rPM1uLQu248t4odg/viewform",
  //   zoomlink: "https://us02web.zoom.us/j/83922869325?pwd=WXFFeFNnNDUzUjdFMjVsZ21aQVNRZz09",
  //   con: false,
  // }
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
            <Col xs="12" sm="6" lg="4" key={index}>
              <Zoom timeout={1000}>
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
