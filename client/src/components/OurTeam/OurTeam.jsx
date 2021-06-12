import React from "react";
import "./ourteam.css";
import { Container, Row, Col } from "reactstrap";
import { RiLinkedinBoxFill } from "react-icons/ri";
import FacultyAdvisor from "./images/FacultyAdvisor.jpg";
import President from "./images/President.jpg";
import VicePresident from "./images/VicePresident.jpg";
import SecretaryErra from "./images/SecretaryErra.jpg";
import Secretary from "./images/Secretary.jpg";
import AdSecretory from "./images/AdSecretory.jpg";
import BDHead from "./images/BDHead.jpg";
import EventHead from "./images/EventHead.jpg";
import AdEventHead from "./images/AdEventHead.jpg";
import Treasurer from "./images/Treasurer.jpg";
import DesigningHead from "./images/DesigningHead.jpg";
import AdDesigningHead from "./images/AdDesigningHead.jpg";
import PRHead from "./images/PRHead.jpg";
// import TechnicalHead from "./images/TechnicalHead.jpg";
import MediaHead from "./images/MediaHead.jpg";
import PromotionHead from "./images/PromotionHead.jpg";
import MarketingHead from "./images/MarketingHead.jpg";
import DraftingHead from "./images/DraftingHead.jpg";
import MembershipHead from "./images/MembershipHead.jpg";
import OurTeam1 from "./images/OurTeam1.jpg";

const officeBearers = [
  {
    src: President,
    position: "President",
    name: "Shivendra Kumar Acharya",
    linkedin: "https://www.linkedin.com/in/shivendra-kumar-acharya-6350a5187/",
  },
  {
    src: VicePresident,
    position: "Vice President",
    name: "Anjali Atreyi",
    linkedin: "https://www.linkedin.com/in/anjali-atreyi-870375198/",
  },
  {
    src: SecretaryErra,
    position: "Secretary ERRA",
    name: "Madhav Singhal",
    linkedin: "https://www.linkedin.com/in/madhav-singhal-7708a3186/",
  },
];

const coreTeam = [
  {
    src: Secretary,
    position: "Secretary",
    name: "Jai Anand",
    linkedin: "https://www.linkedin.com/in/jai-anand-0890b5197/",
  },
  {
    src: AdSecretory,
    position: "Ad. Secretory",
    name: "Suyash Ranjan",
    linkedin: "https://www.linkedin.com/mwlite/in/suyash-ranjan-6380951a5/",
  },
  {
    src: BDHead,
    position: "BD Head",
    name: "Sudeshna Kundu",
    linkedin: "https://www.linkedin.com/in/sudeshna-kundu-61490b1a8/",
  },
  {
    src: EventHead,
    position: "Event Head",
    name: "Sumit Kumar Mudi",
    linkedin: "https://www.linkedin.com/in/sumit-kumar-mudi-0a767a1b8/",
  },
  {
    src: AdEventHead,
    position: "Ad. Event Head",
    name: "Abhya Adri",
    linkedin: "https://www.linkedin.com/in/abhya-adri-a3a428208/",
  },
  {
    src: Treasurer,
    position: "Treasurer",
    name: "Rishabh Kaushal",
    linkedin: "https://www.linkedin.com/in/rishabh-kaushal-2031791a7/",
  },
  {
    src: DesigningHead,
    position: "Designing Head",
    name: "Syed Ali Hyder",
    linkedin: "https://www.linkedin.com/in/syed-ahaider/",
  },
  {
    src: AdDesigningHead,
    position: "Ad. Designing Head",
    name: "Ashmit Sharma",
    linkedin: "https://www.linkedin.com/in/ashmit-sharma-78674319b/",
  },
  {
    src: PRHead,
    position: "PR Head",
    name: "AmlanJyoti Majumdar",
    linkedin: "https://www.linkedin.com/in/amlanjyoti-majumdar-371907195/",
  },
  {
    src: OurTeam1,
    position: "Technical Head",
    name: "Abhijeet Haldar",
    linkedin: "https://www.linkedin.com/in/abhijeet-haldar-59813a1b4/",
  },
  {
    src: MediaHead,
    position: "Media Head",
    name: "Mohit Kumar",
    linkedin: "https://www.linkedin.com/in/mohit-kumar-aa3916213/",
  },
  {
    src: PromotionHead,
    position: "Promotion Head",
    name: "Aman Raj",
    linkedin: "https://www.linkedin.com/in/aman-raj-b35b03184/",
  },
  {
    src: MarketingHead,
    position: "Marketing Head",
    name: "Chelsi Mehta",
    linkedin: "https://www.linkedin.com/in/chelsi-mehta-536aa6187/",
  },
  {
    src: DraftingHead,
    position: "Drafting Head",
    name: "Anusha Priyadarshi",
    linkedin: "https://www.linkedin.com/in/anusha-priyadarshi-baa9a01b8/",
  },
  {
    src: MembershipHead,
    position: "Membership Head",
    name: "Santu Kumar",
    linkedin: "https://www.linkedin.com/in/santu-kumar-047abb19b/",
  },
];

const developers = [
  {
    src: OurTeam1,
    position: "Position",
    name: "Abhinav Kumar Singh",
    linkedin: "https://www.linkedin.com/in/abhinav-kumar-singh-6813501b8/",
  },
  {
    src: OurTeam1,
    position: "Position",
    name: "Abhijeet Haldar",
    linkedin: "https://www.linkedin.com/in/abhijeet-haldar-59813a1b4/",
  },
  {
    src: OurTeam1,
    position: "Position",
    name: "Kartik Saini",
    linkedin: "https://www.linkedin.com/in/kartik-saini-a1a240195/",
  },
];

const OurTeam = () => {
  return (
    <div>
      <div className="team-heading-bg mt-4 d-flex align-items-center justify-content-center">
        <h1 className="page-heading text-center py-3 text-uppercase">Our Team</h1>
      </div>
      <div>
        <h1 className="text-uppercase text-center heading my-5 heading-block">
          Office Bearers
        </h1>
        <Container>
          <Row className="justify-content-center">
            <Col className="my-2" xs="12" sm="6" md="4" lg="3">
              <div className="card team p-2">
                <img
                  className="card-img-top"
                  src={FacultyAdvisor}
                  alt="Faculty Advisor"
                />
                <div className="team-social-handles">
                  <a
                    href="https://www.linkedin.com/in/dheeraj-kumar-915440a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-linkedin"
                  >
                    <RiLinkedinBoxFill />
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Dheeraj Kumar</h5>
                  <p className="card-text">Faculty Advisor</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-between">
            {officeBearers.map((item, index) => {
              return (
                <Col className="my-2" xs="12" sm="6" md="4" lg="3" key={index}>
                  <div className="card team p-2">
                    <img
                      className="card-img-top"
                      src={item.src}
                      alt={item.position}
                    />
                    <div className="team-social-handles">
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-linkedin"
                      >
                        <RiLinkedinBoxFill />
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.position}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div>
        <h1 className="text-uppercase text-center heading my-5 heading-block">
          Core Team
        </h1>
        <Container>
          <Row className="justify-content-between">
            {coreTeam.map((item, index) => {
              return (
                <Col className="my-2" xs="12" sm="6" md="4" lg="3" key={index}>
                  <div className="card team p-2">
                    <img
                      className="card-img-top"
                      src={item.src}
                      alt={item.position}
                    />
                    <div className="team-social-handles">
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-linkedin"
                      >
                        <RiLinkedinBoxFill />
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.position}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div>
        <h1 className="text-uppercase text-center heading my-5 heading-block">
          Developers
        </h1>
        <Container>
          <Row className="justify-content-between">
            {developers.map((item, index) => {
              return (
                <Col className="my-2" xs="12" sm="6" md="4" lg="3" key={index}>
                  <div className="card team p-2">
                    <img
                      className="card-img-top"
                      src={item.src}
                      alt={item.position}
                    />
                    <div className="team-social-handles">
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-linkedin"
                      >
                        <RiLinkedinBoxFill />
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.position}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurTeam;
