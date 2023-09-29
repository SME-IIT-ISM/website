import React from "react";
import { Container, Row, Col } from "reactstrap";
import KhananCard from "./k-events/KhananCard";
import S1 from "../khanan-img/vaibhavRaj.jpg";
import S2 from "../khanan-img/satish.jpg";
// import S3 from "../khanan-img/subroto.jpg";
// import S4 from "../khanan-img/abani.jpg";
// import S5 from "../khanan-img/amit.PNG";
import { events } from "./k-events/KhananEvent";
import Zoom from "react-reveal/Zoom";

const speakers = [
  {
    title: "Dr. Vaibhav Raj",
    src: S1,
    head: "Head Content",
    struct: [
      "Khanan ’21 feels elated to announce that a great mind will be here to enlighten us with his immense knowledge and experience in the field of mining and widen our scope on the same. Unveiling the speaker of Khanan '21, Vaibhav Raj. He is currently working as Associate Service Fellow at National Institute for Occupational Safety and Health (NIOSH), USA. He has been with NIOSH for over 5 years working on occupational safety and health issues pertinent to the mining industry. ",
      "Topic: DATA SCIENCE APPLICATION IN MINING",
      "Contact:",
      "SUMIT KUMAR MUDI : 8210987906",
    ],
    srclink:
      "https://docs.google.com/forms/d/1t8K-pd_-9LqIoF_lP6BGQvRhco9FY10ugHhGKkbi2vM/viewform?edit_requested=true",
      zoomlink: "https://us02web.zoom.us/j/89391818363?pwd=aHhYcURsUmlkZFdoblFacDhVZ2h3dz09",
      con: true,
  },
  {
    title: "Mr. Satish Penmetsa",
    src: S2,
    head: "Head Content",
    struct: [
      "Satish Penmetsa.Currently the CEO of GroundHog,a mobile fleet management system for underground mining companies.It specializes in helping Mines, Aggregates, Quarries and Oilfields significantly improve productivity and safety by going Digital. He has made rapidInspect, mobile fleet maintenance software system for mining and heavy equipment companies. SunSight,a Field Management Software for solar energy providers. He is expert in understanding a business context, and recommending appropriate software solutions.Don't miss the opportunity to hear this inspiring man speak at KHANAN'21!!!",
      "Topic: MINE DIGITIZATION",
      "Contact:",
      "SUMIT KUMAR MUDI : 8210987906",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeaqmHIY3jMNld_PbVLlcuZnTa96UFEER59Ntv7oux51sj6Uw/viewform",
      zoomlink: "https://us02web.zoom.us/j/84154830403?pwd=eGV5TGg3akdwV0J2ZVdndWVtdDRUUT09",
      con: true,

  },
  
  // {
  //   title: "Mr. Amit Kumar",
  //   src: S5,
  //   head: "Head Content",
  //   struct: [
  //     "Mr. Amit Kumar is currently General Manager of Mine Planning in Thyssenkrupp Industries India Pvt. Ltd.. He has also worked Worked as a Mine Planning Manager in MECON Limited and As a Manager, Mining in Tata Steel, Raw Material Division.He is also certified as a First Class Mine Manager's Certificate of compentency in Coal by Directorate General of Mines Safety, Govt. Of India",
  //     "Topic: CONCEPTUAL PLANNING AND MINE DEVELOPMENT",
  //   ],
  // },
];

const Speakers = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="k-sub-heading">MEET OUR SPEAKERS</h2>
        </Col>
      </Row>
      <Row>
        {speakers.map((item, index) => {
          return (
            <Col xs="12" sm="6" lg="3" key={index}>
              <Zoom timeout={600}>
                <KhananCard
                  title={item.title}
                  img={item.src}
                  id={index + events.length}
                />
              </Zoom>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Speakers;
export { speakers };
