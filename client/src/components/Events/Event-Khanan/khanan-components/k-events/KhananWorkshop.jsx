import React from "react";
import { Container, Row, Col } from "reactstrap";
import K1 from "./k-workshop-images/samp.jpeg";
import K2 from "./k-workshop-images/tech expo1.png";

import KhananCard from "./KhananCard";
import {speakers} from "../Kspeakers.jsx";
import {events} from "./KhananEvent.jsx";
import {preevents} from "../PreEvent.jsx";


import Zoom from "react-reveal/Zoom";

const workshop = [



  {
    title: "Mining Automation by Sandvik ",
    src: K2,
    struct: [
    "A workshop on Mine Automation will be organized in Khanan in collaboration with TEXMIN conducted by Sandvik Mining and Rock Solutions, touted as a complete package designed to set mines up for success. It covers all aspects of AutoMine remote and autonomous operations, and the full OptiMine process optimization and analytics suite. It is a must-attend for anyone looking for a career in mine automation and learning various facets of automation in a state-of-art Sandvik Mine Automation Centre (SMAC) classroom set-up at IIT(ISM) Dhanbad. Only 48 participants are allowed in the workshop who will be given the opportunity based on a first-come, first-serve basis.",

    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdvfcuZouE7Kv9RZcvl4kix2HE7FFtTp65nbm3p2EQj3hG9jw/viewform",
    zoomlink: " https://meet.google.com/dmf-ihim-add",
    con: false,
  },
  {
    title: "Aeromodelling and drone by Pushpak Technology",
    src: K2,
    struct: [
    "Aeromodelling is the practice of creating, building, and flying miniature aircraft. Drones are revolutionizing the mining industry. Drones can access highly-toxic hard-to-reach areas for providing better insights for mine planning and 3D mapping. Young minds who are interested in this sector or who want to pursue it as a career will have a great opportunity owing to the workshop, which will offer them a brief overview of building and designing aircraft and drones.",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdvfcuZouE7Kv9RZcvl4kix2HE7FFtTp65nbm3p2EQj3hG9jw/viewform",
    zoomlink: " https://meet.google.com/dmf-ihim-add",
    con: false,
  },
  {
    title: "Resource Modelling by Dassault 3DS",
    src: K2,
    struct: [
    "Khanan in collaboration with TEXMIN organized by Dassault 3DS is organizing a 3D Resource modeling workshop to provide participants a real hands-on training to develop 3D models of coal seams and non-coal reserves. Minex is a recognized world leader in integrated geology and mine planning solutions for coal and other stratified deposits. In a two-day workshop, participants will get basic training and have experience working on Geovia Surpac and Geovia Minex software for creating ore body models, and pit design. So gear up for a power-packed workshop and win exciting prizes by taking the modeling quiz.",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdvfcuZouE7Kv9RZcvl4kix2HE7FFtTp65nbm3p2EQj3hG9jw/viewform",
    zoomlink: " https://meet.google.com/dmf-ihim-add",
    con: false,
  },
  {
    title: "Sensor Technologies by Quro Labs",
    src: K2,
    struct: [
    "The bedrock of Cyber-physical systems is Sensors. An intensive 2-day workshop is thus being organised in Khanan in collaboration with TEXMIN and Quro Labs for the participants interested in developing in developing cyber-physical technologies. Participants will learn to select sensors by reading specs sheets, understand the physical parameters of hardware, understand various layers for Data Acquisition, communication protocols, and also learn what to do with the data for real-life decisions. The workshop will include a hands-on experience working with sensors and a complete walkthrough of the development of real-life sensor-based products in the Mining industry (IoT sensors, accelerometers, obstruction detection, and orientation).",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdvfcuZouE7Kv9RZcvl4kix2HE7FFtTp65nbm3p2EQj3hG9jw/viewform",
    zoomlink: " https://meet.google.com/dmf-ihim-add",
    con: false,
  },
  {
    title: "Real-Time Telematics by Ecross Technology",
    src: K2,
    struct: [
    "Internet of things has transfomed the way we capture and analyze data. Keeping this in mind, TEXMIN in collaboration with Ecross Technologies is organizing an intensive 1-day workshop as a part of this year's Khanan, for the participants interested in developing loT technologies. At the end of workshop, participants will learn development of telematics solutions for the mining and oil and gas industry, understand big data, cloud computing and using data for making real life decisions. Workshop will also include hands on experience on using machine learning and artificial intelligence technologies for practical industrial applications.",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdvfcuZouE7Kv9RZcvl4kix2HE7FFtTp65nbm3p2EQj3hG9jw/viewform",
    zoomlink: " https://meet.google.com/dmf-ihim-add",
    con: false,
  },
  {
    title: "Data Visualization by Tableau ",
    src: K2,
    struct: [
    "Analyzing data involves making decisions related to the data we have, which is crucial in the mining industry. Tableau will be organizing a workshop in Khanan in collaboration with TEXMIN on data visualization. It will be based on Data analytics and visualization for exclusive use in the mining industry. It will provide an insight into analyzing data through visualization in the mining sector such as monitoring, analysing and optimizing excavator cycle time, production planning, and analysing short and long term production outputs of a mine. The workshop will be beneficial for young mining engineers willing to understand data visualization, an important aspect of data analytics.",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdvfcuZouE7Kv9RZcvl4kix2HE7FFtTp65nbm3p2EQj3hG9jw/viewform",
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
