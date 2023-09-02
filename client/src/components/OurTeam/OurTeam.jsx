import React, { useEffect } from "react";
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
import AdBDHead from "./images/AdBDHead.jpeg";
import EventHead from "./images/EventHead.jpeg";
import AdEventHead from "./images/AdEventHead.jpg";
import Treasurer from "./images/Treasurer.jpg";
import AdTreasurerHead from "./images/AdTreasurerHead.jpg";
import DesigningHead from "./images/DesigningHead.jpg";
// import AdDesigningHead from "./images/AdDesigningHead.jpg";
import AdDesigningHead from "./images/AdDesigningHead.jpg";
import PRHead from "./images/PRHead.jpg";
import AdPRHead from "./images/AdPRHead.jpg";
import TechnicalHead from "./images/TechnicalHead.jpg";
import AdTechnicalHead from "./images/AdTechnicalHead.jpeg";
import MediaHead from "./images/MediaHead.jpeg";
import AdMediaHead from "./images/AdMediaHead.jpeg";
import PromotionHead from "./images/PromotionHead.jpg";
import AdPromotionHead from "./images/AdPromotionHead.jpg";
import MarketingHead from "./images/MarketingHead.jpeg";
//comments
//import MarketingHead from "./images/ProfileIcon.jpg";
import AdMarketingHead from "./images/AdMarketingHead.jpg";
import DraftingHead from "./images/DraftingHead.jpg";
import AdDraftingHead from "./images/AdDraftingHead.jpg";
import MembershipHead from "./images/MembershipHead.jpg";
import LogisticsHead from "./images/LogisticsHead.png";
import dev1 from "./images/dev1.jpg";
import dev2 from "./images/dev2.jpg";
import dev3 from "./images/dev3.jpg";
const officeBearers = [
  {
    src: President,
    position: "President",
    name: "Shubham Pandey",
    linkedin: "https://www.linkedin.com/in/shubham-pandey-1898b021b/",
  },
  {
    src: VicePresident,
    position: "Vice President",
    name: "Yadav Navdesh Uttam",
    linkedin: "https://www.linkedin.com/in/navdesh-yadav-5a9a47193/",
  },
  {
    src: SecretaryErra,
    position: "Secretary ERRA",
    name: "Himanshu Shekhar",
    linkedin: "https://www.linkedin.com/in/himanshu-shekhar-544b92204/",
  },
];

const coreTeam = [
  {
    src: Secretary,
    position: "Secretary",
    name: "Shailesh Raj",
    linkedin: "https://www.linkedin.com/in/shailesh-raj-356237241/",
  },
  {
    src: AdSecretory,
    position: "Ad. Secretary",
    name: "Shobhit Singh",
    linkedin: "https://www.linkedin.com/in/shobhit-singh-632045195/",
  },
  {
    src: BDHead,
    position: "BD Head",
    name: "Priyanshu Raj",
    linkedin: "https://www.linkedin.com/in/priyanshu-raj-57a630227/",
  },
  {
    src:AdBDHead,
    position: "Ad. BD Head",
    name: "Riddhiman Banerjee",
    linkedin: "https://www.linkedin.com/in/riddhiman-banerjee/",
  },
  {
    src: EventHead,
    position: "Event Head",
    name: "Kushal Sena R",
    linkedin: "https://www.linkedin.com/in/kushal-sena-230aa5228/",
  },
  {
    src: AdEventHead,
    position: "Ad. Event Head",
    name: "Khushi Barnwal",
    linkedin: "https://www.linkedin.com/in/khushi-barnwal-858777289/",
  },
  {
    src: Treasurer,
    position: "Treasurer",
    name: "Shristi Bharti",
    linkedin: "https://www.linkedin.com/in/shristi-bharti-81767b227/",
  },
  {
    src: AdTreasurerHead,
    position: "Ad. Treasurer Head",
    name: "Ritika Kumari",
    linkedin: "https://www.linkedin.com/in/ritika-kumari-bba38b213/",
  },
  {
    src: DesigningHead,
    position: "Designing Head",
    name: "Souhardya Garai",
    linkedin: "https://www.linkedin.com/in/souhardya-garai-565750226/",
  },
  {
    src: AdDesigningHead,
    position: "Ad. Designing Head",
    name: "Vaishnavi Bansal",
    linkedin: "https://www.linkedin.com/in/vaishnavi-b-6aa18a228/",
  },
  {
    src: PRHead,
    position: "PR Head",
    name: "Mudavath Ganesh",
    linkedin: "https://www.linkedin.com/in/mudavath-ganesh-4935a5242/",
  },
  {
    src: AdPRHead,
    position: "Ad. PR Head",
    name: "Azmeera Prasad",
    linkedin: "https://www.linkedin.com/in/azmeera-prasad-777193228/",

  },
  {
    src: TechnicalHead,
    position: "Technical Head",
    name: "Abhishek Kumar",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-0990581a7/",
  },
  {
    src: AdTechnicalHead,
    position: "Ad. Technical Head",
    name: "Biswajit Rabidas",
    linkedin: "https://www.linkedin.com/in/biswajit-rabidas-3b218b228/",
  },
  {
    src: MediaHead,
    position: "Media Head",
    name: "Deepanshu Borekar",
    linkedin: "https://www.linkedin.com/in/deepanshu-borekar-7029a2225/",
  },
  { 
    src: AdMediaHead,
    position: "Ad. Media Head",
    name: "Aakif Ansari",
    linkedin: "https://www.linkedin.com/in/aakif21/",

  },
  {
    src: PromotionHead,
    position: "Promotion Head",
    name: "Nikita Sharma",
    linkedin: "https://www.linkedin.com/in/nikita-sharma-1b898b232/",
  },
  {
    src: AdPromotionHead,
    position: "Ad. Promotion Head",
    name: "Om Sandilya",
    linkedin: "https://www.linkedin.com/in/om-sandilya-024a951b3/",
  },
  {
    src: MarketingHead,
    position: "Marketing Head",
    name: "Pamula Sanjay",
    linkedin: "https://www.linkedin.com/in/pamula-sanjay-905b79232/",
  },
  {
    src: AdMarketingHead,
    position: "Ad. Marketing Head",
    name: "Dipti Mor",
    linkedin: "https://www.linkedin.com/in/diptimor/",
  },
  {
    src: DraftingHead,
    position: "Drafting Head",
    name: "Raksha Mishra",
    linkedin: "https://www.linkedin.com/in/raksha-mishra/",
  },
  {
    src: AdDraftingHead,
    position: "Ad. Drafting Head",
    name: "Abhay Kumar",
    linkedin: "https://www.linkedin.com/in/abhay-kumar-578b19231",
  },
  {
    src: MembershipHead,
    position: "Membership Head",
    name: "Vihasi Deshbhratar",
    linkedin: "https://www.linkedin.com/in/vihasi-deshbhratar-382b03225/",
  },
  {
    src: LogisticsHead,
    position: "Logistics Head",
    name: "Nikhil Chopra",
    linkedin: "https://www.linkedin.com/in/nikhil-chopra-7071b3230/",
  }
];

const developers = [
  {
    src: dev1,
    position: "Web Developer",
    name: "Kartik Saini",
    linkedin: "https://www.linkedin.com/in/kartik-saini-001/",
  },
  {
    src: dev2,
    position: "Web Developer",
    name: "Abhinav Kumar Singh",
    linkedin: "https://www.linkedin.com/in/abhinav-kumar-singh-6813501b8/",
  },
  {
    src: dev3,
    position: "Web Developer",
    name: "Abhijeet Haldar",
    linkedin: "https://www.linkedin.com/in/abhijeet-haldar-59813a1b4/",
  },
];

const OurTeam = () => {
  useEffect(() => {
    document.title = "Our Team - SME IIT ISM";
  }, []);

  return (
    <div className="our-team">
      <div className="team-heading-bg mt-4 d-flex align-items-center justify-content-center">
        <h1 className="page-heading text-center py-3 text-uppercase">
          Our Team
        </h1>
      </div>
      <div>
        <h1 className="text-uppercase text-center heading my-5 heading-block">
          Office Bearers
        </h1>
        <Container>
          <Row className="justify-content-center">
            <Col className="my-2" xs="10" sm="6" md="4" lg="3">
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
                  <h5 className="card-title">
                    <b>Prof. Dheeraj Kumar</b>
                  </h5>
                  <p className="card-text text-secondary">Faculty Advisor</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center justify-content-sm-between">
            {officeBearers.map((item, index) => {
              return (
                <Col className="my-2" xs="10" sm="6" md="4" lg="3" key={index}>
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
                      <h5 className="card-title">
                        <b>{item.name}</b>
                      </h5>
                      <p className="card-text text-secondary">
                        {item.position}
                      </p>
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
          <Row className="justify-content-center justify-content-sm-between">
            {coreTeam.map((item, index) => {
              return (
                <Col className="my-2" xs="10" sm="6" md="4" lg="3" key={index}>
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
                      <h5 className="card-title">
                        <b>{item.name}</b>
                      </h5>
                      <p className="card-text text-secondary">
                        {item.position}
                      </p>
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
        <Container className="pb-5">
          <Row className="justify-content-center justify-content-sm-between">
            {developers.map((item, index) => {
              return (
                <Col className="my-2" xs="10" sm="6" md="4" lg="3" key={index}>
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
                      <h5 className="card-title">
                        <b>{item.name}</b>
                      </h5>
                      <p className="card-text text-secondary">
                        {item.position}
                      </p>
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
