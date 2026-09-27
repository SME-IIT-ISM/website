import React from "react";
import { Container, Row, Col } from "reactstrap";
// import K1 from "./k-workshop-images/3d immersive technologies.png";
import K4 from "../Khanan-sposnors-2k24/workshop1.png";
import survey from "../Khanan-sposnors-2k24/survey.jpg";
// import K3 from "./k-workshop-images/data visualisation.png";
import K2 from "../Khanan-sposnors-2k24/workshop2.png";
import minetech from "../Khanan-sposnors-2k24/longwall.jpg";
// import K5 from "./k-workshop-images/real time telematics.png";
import K6 from "../Khanan-sposnors-2k24/depth.webp";
// import K7 from "./k-workshop-images/sensor technologies.png";

import KhananCard from "./KhananCard";
import { speakers } from "../Kspeakers.jsx";
import { events } from "./KhananEvent.jsx";
import { preevents } from "../PreEvent.jsx";

import Zoom from "react-awesome-reveal";

const workshop = [
  {
    title: "Long Wall Gallery Visit",
    src: minetech,
    struct: [
      "The visit to the Longwall Gallery provided us with practical exposure to modern underground coal mining methods. We observed the working principles of longwall mining, including the operation of the shearer, powered roof supports, AFC (Armoured Face Conveyor), and the overall face layout. The visit helped us understand how coal extraction, roof support, and material transportation are integrated into a continuous mining system. It was a valuable experience that connected our classroom knowledge with real-world mining practices.",
    ],
    srclink:
      "#",
    con: false,
  },
  {
    title: "Modern Surveying Workshop",
    src: survey,
    struct: [
      "The Modern Surveying Techniques Workshop provides a comprehensive overview of the latest surveying technologies. It includes hands-on training on tools like GPS, LiDAR, and drones, and covers data processing and analysis. This workshop equips participants with practical skills for efficient and accurate surveying.",
    ],
    srclink:
      "#",
    con: false,
  },
  {
    title: "Mining at great depths session",
    src: K6,
    struct: [
    "The session on Mining at Great Depths provided valuable insights into the challenges and techniques involved in deep underground mining. We learned about increasing rock pressure, temperature, ventilation requirements, ground control, and safety challenges at greater depths. The session also highlighted modern technologies and engineering practices used to ensure safe and efficient mining operations. It helped us understand the complexities of deep mining and the importance of advanced planning, monitoring, and risk management.",
    ],
    srclink:
      "#",
    // zoomlink: " https://meet.google.com/dmf-ihim-add",
    con: false,
  },
  // {
  //   title: "Sensor Technologies by Quro Labs",
  //   src: K7,
  //   struct: [
  //   "The bedrock of Cyber-physical systems is Sensors. An intensive 2-day workshop is thus being organised in Khanan in collaboration with TEXMIN and Quro Labs for the participants interested in developing in developing cyber-physical technologies. Participants will learn to select sensors by reading specs sheets, understand the physical parameters of hardware, understand various layers for Data Acquisition, communication protocols, and also learn what to do with the data for real-life decisions. The workshop will include a hands-on experience working with sensors and a complete walkthrough of the development of real-life sensor-based products in the Mining industry (IoT sensors, accelerometers, obstruction detection, and orientation).",
  //   ],
  //   srclink:
  //     "https://docs.google.com/forms/d/e/1FAIpQLSdvfcuZouE7Kv9RZcvl4kix2HE7FFtTp65nbm3p2EQj3hG9jw/viewform",
  //   zoomlink: " https://meet.google.com/dmf-ihim-add",
  //   con: false,
  // },
  // {
  //   title: "Real-Time Telematics by Ecross Technology",
  //   src: K5,
  //   struct: [
  //   "Internet of things has transfomed the way we capture and analyze data. Keeping this in mind, TEXMIN in collaboration with Ecross Technologies is organizing an intensive 1-day workshop as a part of this year's Khanan, for the participants interested in developing loT technologies. At the end of workshop, participants will learn development of telematics solutions for the mining and oil and gas industry, understand big data, cloud computing and using data for making real life decisions. Workshop will also include hands on experience on using machine learning and artificial intelligence technologies for practical industrial applications.",
  //   ],
  //   srclink:
  //     "https://docs.google.com/forms/d/e/1FAIpQLSdvfcuZouE7Kv9RZcvl4kix2HE7FFtTp65nbm3p2EQj3hG9jw/viewform",
  //   zoomlink: " https://meet.google.com/dmf-ihim-add",
  //   con: false,
  // },
  // {
  //   title: "Data Visualization by Tableau ",
  //   src: K3,
  //   struct: [
  //   "Analyzing data involves making decisions related to the data we have, which is crucial in the mining industry. Tableau will be organizing a workshop in Khanan in collaboration with TEXMIN on data visualization. It will be based on Data analytics and visualization for exclusive use in the mining industry. It will provide an insight into analyzing data through visualization in the mining sector such as monitoring, analysing and optimizing excavator cycle time, production planning, and analysing short and long term production outputs of a mine. The workshop will be beneficial for young mining engineers willing to understand data visualization, an important aspect of data analytics.",
  //   ],
  //   srclink:
  //     "https://docs.google.com/forms/d/e/1FAIpQLSdvfcuZouE7Kv9RZcvl4kix2HE7FFtTp65nbm3p2EQj3hG9jw/viewform",
  //   zoomlink: " https://meet.google.com/dmf-ihim-add",
  //   con: false,
  // },
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
            <Col
              xs="12"
              sm="6"
              lg="4"
              key={index + events.length + speakers.length + preevents.length}
            >
              <Zoom timeout={600}>
                <KhananCard
                  title={item.title}
                  img={item.src}
                  id={
                    index + events.length + speakers.length + preevents.length
                  }
                />
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
