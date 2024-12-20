import React from "react";
import { Container, Row, Col } from "reactstrap";
import K1 from "../Khanan-sposnors-2k24/Dezyn O Mania.png";
import K2 from "../Khanan-sposnors-2k24/Gamicon.png";
import K3 from "../Khanan-sposnors-2k24/War O Words.png";
import K4 from "../Khanan-sposnors-2k24/Khanan Mafia.png";
import K5 from "../Khanan-sposnors-2k24/Mining Olympiad.png";
import K6 from "../Khanan-sposnors-2k24/Nirvana.png";
import K7 from "../Khanan-sposnors-2k24/Placement Fever.png";
import K8 from "../Khanan-sposnors-2k24/Quizzine.png";
import K11 from "../Khanan-sposnors-2k24/Kalakriti.png";
import KhananCard from "./KhananCard";
import Zoom from "react-reveal/Zoom";

const events = [
  {
    title: "War O Words",
    src: K1,
    struct: [
      "Get ready to unearth innovation at The Next Big Thing in Khanan'24. Join the battle of wits with engineering prodigies as you showcase your visionary ideas. This platform ignites creativity, sparking an exchange of game-changing concepts for your dream company. Don't miss your chance to be part of the future – Khanan'24 awaits your brilliance!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSem7_pcT5s4hqncqyeq_zDFhcoKodgAPocpkZ0PqnQFYuuCaA/formrestricted",
    zoomlink: "",
    con: false,
  },
  {
    title: "Dezyn O Mania",
    src: K3,
    struct: [
      "Embark on a mining innovation journey with Mine Designothon at Khanan '24. This exhilarating 36-hour hackathon challenges students to design optimal mine solutions. It all begins on the event's website with an intriguing predicament unveiling. Collaborate with peers, brainstorm ideas, and explore diverse possibilities to craft viable answers. Your hard work culminates in a meticulous assessment by a selective jury, ensuring fair and accurate evaluation. Join this intellectual quest to showcase your mining prowess and innovative spirit. Khanan '24 – where innovation converges with mining excellence! Don't miss this opportunity to make your mark.",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeKx2SGT1X24ICY1nQnghSgynLOU9fw2zmVNxWLw1tvhuGjOw/viewform?usp=send_form",

    con: false,
  },
  {
    title: "Nirvana",
    src: K6,
    struct: [
      "Dive into innovation at Nirvana, the crown jewel of Khanan'24 – IIT ISM Dhanbad's Geo Mining Fest! Unleash your brilliance in the mining industry's epicenter. Nirvana presents a dual-track adventure. Choose to conquer Khanan's challenges head-on or forge your own path with tailored solutions. Our expert-curated problem statements are a testament to excellence, guided by the sharpest minds in the field. Join us for a seismic shift in mining innovation. Don't miss your chance to shine at Nirvana, where groundbreaking ideas light up the future. Secure your spot at Khanan'24 and be part of the geological revolution!",
    ],

    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeuFhynMDopxovYHlqdhYbP8Q72KhP7gwUAXKlZRJIznx4gxA/viewform",
    con: false,
  },
  {
    title: "Gamicon",
    src: K2,
    struct: [
      "Get ready to level up your Khanan'24 experience at Gamicon! Trade your tie for a controller, and heels for a comfy spot as we transform the formal into the fantastic. Dive into virtual adventures and showcase your gaming prowess on two consecutive nights of non-stop fun! Join us in this game-based oasis, where fun knows no bounds. It's your golden ticket to a world where the night lights up with gaming fever. Don't miss out on the ultimate fusion of formal and gaming – Gamicon at Khanan'24!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfkJ60avg0F2pDyNhZRuW78gGBdbz0h2mP040e3baS296YUlQ/viewform",
    con: false,
  },
  {
    title: "Khanan Mafia",
    src: K4,
    struct: [
      " Unearth hidden treasures and unravel mysteries at Khanan '24, IIT ISM Dhanbad's annual geo-mining fest! The notorious Khanan Mafia treasure hunt is back, promising an exhilarating adventure for those with sharp logic and deduction skills. Dive into a world of intrigue, strategy, and cunning as you navigate through thrilling twists and turns. Picture yourself at the heart of the action, forging alliances and unveiling secrets in a battle of wits like no other. Experience Khanan '24 in a whole new light with Khanan Mafia – where mystery and strategy collide for an unforgettable ride!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdXBQzIada_4aA8pBIUOXfFWtanfDQXmBRlwfm6PnPSJIMepg/viewform",
    zoomlink: "",
    con: false,
  },
  {
    title: "Mining Olympiad",
    src: K5,
    struct: [
      "Fuel your curiosity at Mining Olympiad, a thrilling event at Khanan'24! Prepare for an epic challenge, showcasing your mining expertise and skills. Join us to promote mining studies, careers, and global awareness. Quizzine offers mining enthusiasts a chance to shine and test their knowledge. Unearth your potential at Mining Olympiad – where knowledge meets excitement!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdW7pWAC4jiq3RAFKpSOBXfz6jRx4chTG-C8I4s8GCpO7xRCQ/viewform",
    con: false,
  },

  {
    title: "Placement Fever",
    src: K7,
    struct: [
      "The Khanan Family believes in the wise saying of Bruce Garrabrandt- Creativity doesn’t wait for that perfect moment. It fashions its own perfect moments out of ordinary ones.” Therefore, recognizing your remarkable ingenuity and creativity, we are returning with our exceptional event- PLACEMENT FEVER. Placement fever showcases both your quantitative and qualitative skills, offering substantial guidance on how to strategically engage with companies, thereby solidifying your reputation in a specific domain and enhancing your self-assurance and competencies. Participating in this activity will provide extensive assistance, serving as a means to better understand how to navigate the corporate landscape. Embrace this chance as a self-rewarding opportunity. The event's intention is to immerse students in a simulated rendition of the campus placement process.",
    ],

    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeT_xJzqz3mDIw5Z3fIQjlCu3XmUGoA31zRyT6lwN2-iCJn2A/viewform",
    con: false,
  },
  {
    title: "Quizzine",
    src: K8,
    struct: [
      "Join the Quizzine extravaganza at Khanan'24, IIT ISM Dhanbad's annual geo mining fest, organized in collaboration with Quiz Club! Challenge yourself with a General Quiz that covers science, tech, music, and more. Let's unearth knowledge, ignite curiosity, and compete for glory, all while making memories one question at a time. Are you ready for the challenge?",
    ],

    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe6MpKlg5UV77EO-LotEU9tSGQKt_v3h56Sg-_LqMd1zEnLXg/viewform",
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
