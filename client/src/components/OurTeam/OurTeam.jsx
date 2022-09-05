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
import AdBDHead from "./images/ProfileIcon.jpg";
import EventHead from "./images/EventHead.jpg";
import AdEventHead from "./images/AdEventHead.jpg";
import Treasurer from "./images/Treasurer.jpg";
import AdTreasurerHead from "./images/ProfileIcon.jpg";
import DesigningHead from "./images/DesigningHead.jpg";
// import AdDesigningHead from "./images/AdDesigningHead.jpg";
import AdDesigningHead from "./images/ProfileIcon.jpg";
import PRHead from "./images/PRHead.jpg";
import TechnicalHead from "./images/ProfileIcon.jpg";
import AdTechnicalHead from "./images/ProfileIcon.jpg";
import MediaHead from "./images/MediaHead.jpg";
import PromotionHead from "./images/PromotionHead.jpg";
import AdPromotionHead from "./images/AdPromotionHead.jpg";
// import MarketingHead from "./images/MarketingHead.jpg"; 
import MarketingHead from "./images/ProfileIcon.jpg";
import AdMarketingHead from "./images/ProfileIcon.jpg";
import DraftingHead from "./images/DraftingHead.jpg";
import AdDraftingHead from "./images/ProfileIcon.jpg";
import MembershipHead from "./images/MembershipHead.jpg";
import LogisticsHead from "./images/ProfileIcon.jpg";
import dev1 from "./images/dev1.jpg";
import dev2 from "./images/dev2.jpg";
import dev3 from "./images/dev3.jpg";
const officeBearers = [
  {
    src: President,
    position: "President",
    name: "Sudeshna Kundu",
    linkedin: "https://www.linkedin.com/in/sudeshna-kundu-61490b1a8/",
  },
  {
    src: VicePresident,
    position: "Vice President",
    name: "Santu Kumar",
    linkedin: "https://www.linkedin.com/in/santu-kumar-047abb19b/",
  },
  {
    src: SecretaryErra,
    position: "Secretary ERRA",
    name: "Jai Anand",
    linkedin: "https://www.linkedin.com/in/jai-anand-0890b5197/",
  },
];

const coreTeam = [
  {
    src: Secretary,
    position: "Secretary",
    name: "Gaurav Kumar",
    linkedin: "https://www.linkedin.com/in/gaurav-kumar-044bb4219/",
  },
  {
    src: AdSecretory,
    position: "Ad. Secretory",
    name: "Yadav Navdesh Uttam",
    linkedin: "https://www.linkedin.com/in/navdesh-yadav-5a9a47193/",
  },
  {
    src: BDHead,
    position: "BD Head",
    name: "Shubham Pandey",
    linkedin: "https://www.linkedin.com/in/shubham-pandey-1898b021b",
  },
  {
    src:AdBDHead,
    position: "Ad. BD Head",
    name: "Rohit Kumar Mondal",
    linkedin: "https://www.linkedin.com/in/rohit-kumar-mondal-b73052222/",
  },
  {
    src: EventHead,
    position: "Event Head",
    name: "Anuj Kumar Raj",
    linkedin: "https://www.linkedin.com/in/anuj-kumar-raj-170593213/",
  },
  {
    src: AdEventHead,
    position: "Ad. Event Head",
    name: "Ayushman Tiwari",
    linkedin: "https://www.linkedin.com/in/ayushman-tiwari-9757871b9/",
  },
  {
    src: Treasurer,
    position: "Treasurer",
    name: "Sudhanshu Suman Prasad",
    linkedin: "https://www.linkedin.com/in/sudhanshu-suman-prasad-902486201/",
  },
  {
    src: AdTreasurerHead,
    position: "Ad. Treasurer Head",
    name: "Himanshu Shekhar",
    linkedin: "https://www.linkedin.com/in/himanshu-shekhar-544b92204/",
  },
  {
    src: DesigningHead,
    position: "Designing Head",
    name: "Vedant Kothiya",
    linkedin: "https://www.linkedin.com/in/vedant-kothiya-438527215/",
  },
  {
    src: AdDesigningHead,
    position: "Ad. Designing Head",
    name: "Harish Varma",
    linkedin: "https://www.linkedin.com/in/shubham-pandey-1898b021b",
  },
  {
    src: PRHead,
    position: "PR Head",
    name: "Akashdeep",
    linkedin: "https://www.linkedin.com/in/iamakashdeepmehta/",
  },
  {
    src: TechnicalHead,
    position: "Technical Head",
    name: "Rajnish Kumar",
    linkedin: "https://www.linkedin.com/in/rajnishism/",
  },
  {
    src: AdTechnicalHead,
    position: "Ad. Technical Head",
    name: "Balbir Prasad",
    linkedin: "https://www.linkedin.com/in/balbir-prasad-362aa2121/",
  },
  {
    src: MediaHead,
    position: "Media Head",
    name: "Manish Vijay Garje",
    linkedin: "https://www.linkedin.com/in/manish-garje-b6b193204/",
  },
  {
    src: PromotionHead,
    position: "Promotion Head",
    name: "Ayush Gupta",
    linkedin: "https://www.linkedin.com/in/ayush-gupta-45b567221/",
  },
  {
    src: AdPromotionHead,
    position: "Ad. Promotion Head",
    name: "Yashi Sachan",
    linkedin: "https://www.linkedin.com/in/yashi-sachan-373235212/",
  },
  {
    src: MarketingHead,
    position: "Marketing Head",
    name: "Aditi Anand",
    linkedin: "https://www.linkedin.com/in/aditi-anand-8ba31a212/",
  },
  {
    src: AdMarketingHead,
    position: "Ad. Marketing Head",
    name: "Priyanshu Jha",
    linkedin: "https://www.linkedin.com/in/priyanshu-jha-a09662204/",
  },
  {
    src: DraftingHead,
    position: "Drafting Head",
    name: "Pavitra Bhargava",
    linkedin: "https://www.linkedin.com/in/pavitra-bhargava-788197224/",
  },
  {
    src: AdDraftingHead,
    position: "Ad. Drafting Head",
    name: "Naveen Kumar Saini",
    linkedin: "https://www.linkedin.com/in/naveen-saini-267476204/",
  },
  {
    src: MembershipHead,
    position: "Membership Head",
    name: "Raushan Kumar",
    linkedin: "https://www.linkedin.com/in/raushan-kumar-7ba163205/",
  },
  {
    src: LogisticsHead,
    position: "Logistics Head",
    name: "Ambuj Gupta",
    linkedin: "https://www.linkedin.com/in/ambuj-gupta-695215221/",
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
