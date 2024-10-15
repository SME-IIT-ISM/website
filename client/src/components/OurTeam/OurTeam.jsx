import React, { useEffect } from "react";
import "./ourteam.css";
import { Container, Row, Col } from "reactstrap";
import { RiLinkedinBoxFill } from "react-icons/ri";
import FacultyAdvisor from "./images/FacultyAdvisor.jpg";
import President from "./images/President.jpg";
import VicePresident from "./images/VicePresident.jpg";
import SecretaryErra from "./images/SecretaryErra.jpg";
import Secretary from "./images/Secretary.jpg";
import AdSecretory from "./images/AdSecretary.jpg";
import BDHead from "./images/BDHead.jpg";
import AdBDHead from "./images/AdBDHead.jpg";
import EventHead from "./images/EventHead.jpg";
import AdEventHead from "./images/AdEventHead.jpg";
import Treasurer from "./images/Treasurer.png";
import AdTreasurerHead from "./images/AdTreasurerHead.jpg";
import DesigningHead from "./images/DesigningHead.jpeg";
// import AdDesigningHead from "./images/AdDesigningHead.jpg";
import AdDesigningHead from "./images/AdDesigningHead.jpeg";
import PRHead from "./images/PRHead.jpg";
import AdPRHead from "./images/AdPRHead.jpg";
import TechnicalHead from "./images/TechnicalHead.jpg";
import AdTechnicalHead from "./images/AdTechnicalHead.jpg";
import MediaHead from "./images/MediaHead.jpeg";
import AdMediaHead from "./images/AdMediaHead.jpeg";
import PromotionHead from "./images/PromotionHead.jpg";
import AdPromotionHead from "./images/AdPromotionHead.jpeg";
import MarketingHead from "./images/MarketingHead.jpg";
//comments
//import MarketingHead from "./images/ProfileIcon.jpg";
import AdMarketingHead from "./images/AdMarketingHead.jpg";
import DraftingHead from "./images/DraftingHead.jpg";
import AdDraftingHead from "./images/AdDraftingHead.jpg";
import MembershipHead from "./images/MembershipHead.jpg";
import LogisticsHead from "./images/LogisticsHead.png";
import AdLogisticsHead from "./images/AdLogisticsHead.jpg";
import dev1 from "./images/dev1.jpg";
import dev2 from "./images/dev2.jpg";
import dev3 from "./images/dev3.jpg";
const officeBearers = [
  {
    src: President,
    position: "President",
    name: "Shailesh Raj",
    linkedin: "https://www.linkedin.com/in/shailesh-raj-356237241/",
  },
  {
    src: VicePresident,
    position: "Designing Head",
    name: "Souhardya Garai",
    linkedin: "https://www.linkedin.com/in/souhardya-garai-565750226/",
  },
  {
    src: SecretaryErra,
    position: "Secretary Erra",
    name: "Raksha Mishra",
    linkedin: "https://www.linkedin.com/in/raksha-mishra/",
  },
];

const coreTeam = [
  {
    src: Secretary,
    position: "Secretary",
    name: "Manish Kumar",
    linkedin: "https://www.linkedin.com/in/manish-kumar46/",
  },
  {
    src: AdSecretory,
    position: "Ad. Secretary",
    name: "Deep kumar Dey",
    linkedin: "https://www.linkedin.com/in/deep-kumar-dey-b5741a253/",
  },
  {
    src: BDHead,
    position: "BD Head",
    name: "Himanshu Singh",
    linkedin: "https://www.linkedin.com/in/himanshu-singh-452847252/",
  },
  {
    src:AdBDHead,
    position: "Ad. BD Head",
    name: "Piyush Kumar",
    linkedin: "https://www.linkedin.com/in/piyush-kumar16171718/",
  },
  {
    src: EventHead,
    position: "Event Head",
    name: "Nakshatra Singh Jhala",
    linkedin: "https://www.linkedin.com/in/nakshatra-singh-jhala-6a8764255/",
  },
  {
    src: AdEventHead,
    position: "Ad. Event Head",
    name: "Md. Affan Ahmed",
    linkedin: "https://www.linkedin.com/in/mdaffanahmad/",
  },
  {
    src: TechnicalHead,
    position: "Technical Head",
    name: "Aditya Jaiswal",
    linkedin: "https://www.linkedin.com/in/aditya-jaiswal-566230270/",
  },
  {
    src: AdTechnicalHead,
    position: "Ad. Technical Head",
    name: "Rupesh Kumar",
    linkedin: "https://www.linkedin.com/in/rupesh-kumar11/",
  },
  {
    src: Treasurer,
    position: "Treasurer",
    name: "Himanshu Raj",
    linkedin: "https://www.linkedin.com/in/hraj13153/",
  },
  {
    src: AdTreasurerHead,
    position: "Ad. Treasurer Head",
    name: "Kumar Shivam",
    linkedin: "https://www.linkedin.com/in/kumar-shivam-135392250/",
  },
  {
    src: DesigningHead,
    position: "Designing Head",
    name: "Kundan Kumar",
    linkedin: "https://www.linkedin.com/in/kundannn/",
  },
  {
    src: AdDesigningHead,
    position: "Ad. Designing Head",
    name: "Kabbya Sarkar",
    linkedin: "https://www.linkedin.com/in/kabbya-sarkar-9619b4256/",
  },
  {
    src: PRHead,
    position: "PR Head",
    name: "Naramdas Shiva",
    linkedin: "https://www.linkedin.com/in/naramdasshiva/",
  },
  {
    src: AdPRHead,
    position: "Ad. PR Head",
    name: "Vanshika Pandey",
    linkedin: "https://www.linkedin.com/in/azmeera-prasad-777193228/",

  },
  
  {
    src: MediaHead,
    position: "Media Head",
    name: "Tanush Nimbawat",
    linkedin: "https://www.linkedin.com/in/tanush-nimbawat-a95b83254/",
  },
  { 
    src: AdMediaHead,
    position: "Ad. Media Head",
    name: "Sevak Kumar",
    linkedin: "https://www.linkedin.com/in/georgian3330/",

  },
  {
    src: PromotionHead,
    position: "Promotion Head",
    name: "Pranav Raj",
    linkedin: "https://www.linkedin.com/in/pranav-raj-1a186a1a6/",
  },
  {
    src: AdPromotionHead,
    position: "Ad. Promotion Head",
    name: "Rishit Mantri",
    linkedin: "https://www.linkedin.com/in/rishit-mantri-829862254/",
  },
  {
    src: MarketingHead,
    position: "Marketing Head",
    name: "Kodem Rishik",
    linkedin: "https://www.linkedin.com/in/kodem-rishik-933139256/",
  },
  {
    src: AdMarketingHead,
    position: "Ad. Marketing Head",
    name: "Banoth Nikhila",
    linkedin: "https://www.linkedin.com/in/banoth-nikhila-648b70258/",
  },
  {
    src: DraftingHead,
    position: "Drafting Head",
    name: "Aryan Kumar",
    linkedin: "https://www.linkedin.com/in/aryan-kumar2612/",
  },
  {
    src: AdDraftingHead,
    position: "Ad. Drafting Head",
    name: "Saloni Kumari",
    linkedin: "https://www.linkedin.com/in/abhay-kumar-578b19231",
  },
  {
    src: MembershipHead,
    position: "Membership Head",
    name: "Ashutosh Kumar",
    linkedin: "https://www.linkedin.com/in/ashutosh-kumar-690711288/",
  },
  {
    src: LogisticsHead,
    position: "Logistics Head",
    name: "Koushik Mandal",
    linkedin: "https://www.linkedin.com/in/koushik-mandal-020602259/",
  },
  {
    src: AdLogisticsHead,
    position: "Ad. Logistics Head",
    name: "Pritam Chandra",
    linkedin: "https://www.linkedin.com/in/pritam-chandra-6a12b9256/",
  }
];

const developers = [
  {
    src: TechnicalHead,
    position: "Web Developer",
    name: "Aditya Jaiswal",
    linkedin: "https://www.linkedin.com/in/aditya-jaiswal-566230270/",
  },
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
                    <b>Prof. Devi Prasad Mishra</b>
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
