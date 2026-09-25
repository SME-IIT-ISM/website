import React from "react";
import { Container, Row, Col } from "reactstrap";
import K1 from "../Khanan-sposnors-2k24/gamicon26.jpg";
import K2 from "../Khanan-sposnors-2k24/gamicon_bgmi26.jpg";
import K12 from "../Khanan-sposnors-2k24/gamicon_ff.webp";
import K3 from "../Khanan-sposnors-2k24/dezyn_o_mania26.webp";
import K4 from "../Khanan-sposnors-2k24/khanan_mafia26.webp";
import K5 from "../Khanan-sposnors-2k24/mining_olympiad26.webp";
import K6 from "../Khanan-sposnors-2k24/nirvana26.heic";
import K7 from "../Khanan-sposnors-2k24/placement_fever26.jpg";
import K8 from "../Khanan-sposnors-2k24/quizzine26.webp";
import k10 from "../Khanan-sposnors-2k24/saanp26.jpg";
import K11 from "../Khanan-sposnors-2k24/kalakriti26.webp";
import KhananCard from "./KhananCard";
import Zoom from "react-awesome-reveal";

const events = [
  // {
  //   title: "War O Words",
  //   src: K1,
  //   struct: [
  //     "Get ready to unearth innovation at The Next Big Thing in Khanan'25. Join the battle of wits with engineering prodigies as you showcase your visionary ideas. This platform ignites creativity, sparking an exchange of game-changing concepts for your dream company. Don't miss your chance to be part of the future – Khanan'25 awaits your brilliance!",
  //   ],
  //   srclink:
  //     "https://docs.google.com/forms/d/e/1FAIpQLSfHYRD3G0Ad1l0Yfr1TGi_0p3pLgVI25GXLBTu74rwm_chw3g/viewform",
  //   zoomlink: "",
  //   con: false,
  // },
  {
    title: "Dezyn O Mania",
    src: K3,
    struct: [
      "Embark on a mining innovation journey with Mine Designothon at Khanan '26. This exhilarating 36-hour hackathon challenges students to design optimal mine solutions. It all begins on the event's website with an intriguing predicament unveiling. Collaborate with peers, brainstorm ideas, and explore diverse possibilities to craft viable answers. Your hard work culminates in a meticulous assessment by a selective jury, ensuring fair and accurate evaluation. Join this intellectual quest to showcase your mining prowess and innovative spirit. Khanan '26 – where innovation converges with mining excellence! Don't miss this opportunity to make your mark.",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd3R7a3ewFD6aVKwFmsUXK5TXUvaK5a3j_Rbx-XVgjopDwx0Q/viewform",

    con: false,
  },
  {
    title: "Nirvana",
    src: K6,
    struct: [
      "Dive into innovation at Nirvana, the crown jewel of Khanan'26 – IIT ISM Dhanbad's Geo Mining Fest! Unleash your brilliance in the mining industry's epicenter. Nirvana presents a dual-track adventure. Choose to conquer Khanan's challenges head-on or forge your own path with tailored solutions. Our expert-curated problem statements are a testament to excellence, guided by the sharpest minds in the field. Join us for a seismic shift in mining innovation. Don't miss your chance to shine at Nirvana, where groundbreaking ideas light up the future. Secure your spot at Khanan'26 and be part of the geological revolution!",
    ],

    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe-2fLkTeGNDIethnW4I7IS5jHEtqOkAOC78TI2bcNfSendRw/viewform",
    con: false,
  },
    {
    title: "Gamicon",
    src: K2,
    struct: [
      "Get ready to level up your Khanan'26 experience at Gamicon! Trade your tie for a controller, and heels for a comfy spot as we transform the formal into the fantastic. Dive into virtual adventures and showcase your gaming prowess on two consecutive nights of non-stop fun! Join us in this game-based oasis, where fun knows no bounds. It's your golden ticket to a world where the night lights up with gaming fever. Don't miss out on the ultimate fusion of formal and gaming – Gamicon at Khanan'26!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdVoULc7UfgDeuTh-Fm8jRavye2yKGEbYtewOy_UrLbPM1u9w/viewform",
    con: false,
  },
  {
    title: "Gamicon 2.0",
    src: K12,
    struct: [
      "Get ready to level up your Khanan'26 experience at Gamicon! Trade your tie for a controller, and heels for a comfy spot as we transform the formal into the fantastic. Dive into virtual adventures and showcase your gaming prowess on two consecutive nights of non-stop fun! Join us in this game-based oasis, where fun knows no bounds. It's your golden ticket to a world where the night lights up with gaming fever. Don't miss out on the ultimate fusion of formal and gaming – Gamicon at Khanan'26!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLScQUnO-KHnDrgI6aok2OHHJwCbjvKTACkUVDTMh-tuYpOQ8Fw/viewform?pli=1",
    con: false,
  },

  {
    title: "Gamicon 3.0",
    src: K1,
    struct: [
      "Get ready to level up your Khanan'26 experience at Gamicon! Trade your tie for a controller, and heels for a comfy spot as we transform the formal into the fantastic. Dive into virtual adventures and showcase your gaming prowess on two consecutive nights of non-stop fun! Join us in this game-based oasis, where fun knows no bounds. It's your golden ticket to a world where the night lights up with gaming fever. Don't miss out on the ultimate fusion of formal and gaming – Gamicon at Khanan'26!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfW4icihL4x972nyEu-nOIw9nms7Dpk66_8VbOFdeefFMpA2A/viewform",
    con: false,
  },
  
  {
    title: "Khanan Mafia",
    src: K4,
    struct: [
      " Unearth hidden treasures and unravel mysteries at Khanan '26, IIT ISM Dhanbad's annual geo-mining fest! The notorious Khanan Mafia treasure hunt is back, promising an exhilarating adventure for those with sharp logic and deduction skills. Dive into a world of intrigue, strategy, and cunning as you navigate through thrilling twists and turns. Picture yourself at the heart of the action, forging alliances and unveiling secrets in a battle of wits like no other. Experience Khanan '26 in a whole new light with Khanan Mafia – where mystery and strategy collide for an unforgettable ride!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfpmCp3Mrgr-xzazwzF_egENkQNeheFzX5QOLwMIcqkQI14NA/viewform",
    zoomlink: "",
    con: false,
  },
  {
    title: "Mining Olympiad",
    src: K5,
    struct: [
      "Fuel your curiosity at Mining Olympiad, a thrilling event at Khanan'26! Prepare for an epic challenge, showcasing your mining expertise and skills. Join us to promote mining studies, careers, and global awareness. Quizzine offers mining enthusiasts a chance to shine and test their knowledge. Unearth your potential at Mining Olympiad – where knowledge meets excitement!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfAp7AuxYAmucRHxxSE2Fl2qk5UmPeW9xjYjkdMJsRYXCoZ_Q/viewform",
    con: false,
  },

  {
    title: "Placement Fever",
    src: K7,
    struct: [
      "The Khanan Family believes in the wise saying of Bruce Garrabrandt- Creativity doesn’t wait for that perfect moment. It fashions its own perfect moments out of ordinary ones.” Therefore, recognizing your remarkable ingenuity and creativity, we are returning with our exceptional event- PLACEMENT FEVER. Placement fever showcases both your quantitative and qualitative skills, offering substantial guidance on how to strategically engage with companies, thereby solidifying your reputation in a specific domain and enhancing your self-assurance and competencies. Participating in this activity will provide extensive assistance, serving as a means to better understand how to navigate the corporate landscape. Embrace this chance as a self-rewarding opportunity. The event's intention is to immerse students in a simulated rendition of the campus placement process.",
    ],

    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfM-NWc73ik0tHVF3kKf5wDkQ2s4pBoHTIxNpoDva5jssqf-A/viewform",
    con: false,
  },
  {
    title: "Quizzine",
    src: K8,
    struct: [
      "Join the Quizzine extravaganza at Khanan'26, IIT ISM Dhanbad's annual geo mining fest, organized in collaboration with Quiz Club! Challenge yourself with a General Quiz that covers science, tech, music, and more. Let's unearth knowledge, ignite curiosity, and compete for glory, all while making memories one question at a time. Are you ready for the challenge?",
    ],

    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLScOyxkB29vhXRawSR6c219_tjxNhjHv8tjYYFTgTnFVYCSE2w/viewform",
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
  //   title: "Saanp Tank",
  //   src: K10,
  //   struct: [
  //    "Think you have an absolutely weird, useless, genius, or downright questionable product idea? Welcome to Saanp Tank — our hilarious parody of Shark Tank, where creativity matters more than logic!Bring your most bizarre product idea and pitch it like you're about to secure a million-dollar investment. Convince the investors that your product deserves to exist — no matter how ridiculous it sounds!So, whether you've invented a self-stirring Maggi maker, a breakup-proof relationship contract, or something even more absurd — we've got a tank waiting for you.Think weird. Pitch confidently. Survive the tank.",
  //   ],

  //   srclink: "https://docs.google.com/forms/d/e/1FAIpQLSfZwwCc63l79_gOFurUEGY6bMdE-Wp2lwYORukb_3HbrBpmVw/viewform",
  //   con: false,
  // },
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
