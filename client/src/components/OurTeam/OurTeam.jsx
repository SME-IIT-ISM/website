import React, { useEffect } from "react";
import "./ourteam.css";
import { Container, Row, Col } from "reactstrap";
import { RiLinkedinBoxFill } from "react-icons/ri";
import FacultyAdvisor from "./images/FacultyAdvisor.jpg";
import Convenor from "./images/Convenor.jpg";
import Co_Convenor from "./images/Co_Convenor.jpg";
import Co_Convenor1 from "./images/Co_Convenor1.jpg";
import Coordinator from "./images/Coordinator.jpg";
import Co_Coordinator from "./images/Co_Coordinator.jpg";
import BDHead from "./images/BDHead.jpg";
import AdBDHead from "./images/AdBDHead.jpg";
import EventHead from "./images/EventHead.jpg";
import EventHead1 from "./images/EventHead1.PNG";
import EventHead2 from "./images/EventHead2.jpg";
import Treasurer from "./images/Treasurer.jpg";
import AdTreasurerHead from "./images/AdTreasurerHead.jpg";
import DesigningHead from "./images/ProfileIcon.jpg";
import AdDesigningHead from "./images/AdDesigningHead.jpeg";
import PRHead from "./images/PRHead.jpg";
import AdPRHead from "./images/AdPRHead.jpg";
import TechnicalHead from "./images/TechnicalHead.jpg";
import AdTechnicalHead from "./images/AdTechnicalHead.jpg";
import MediaHead from "./images/MediaHead.jpg";
import AdMediaHead from "./images/AdMediaHead.jpg";
import PromotionHead from "./images/PromotionHead.jpg";
import AdPromotionHead from "./images/AdPromotionHead.jpg";
import MarketingHead from "./images/MarketingHead.jpeg";
import AdMarketingHead from "./images/AdMarketingHead.jpg";
import DraftingHead from "./images/DraftingHead.jpg";
import AdDraftingHead from "./images/ProfileIcon.jpg";
import LogisticsHead from "./images/LogisticsHead.jpg";
import AdLogisticsHead from "./images/AdLogisticsHead.jpg";
import SecurityHead from "./images/ProfileIcon.jpg";
import AdSecurityHead from "./images/ProfileIcon.jpg";
import HospitalityHead from "./images/HospitalityHead.jpg";
import AdHospitalityHead from "./images/AdHospitalityHead.jpg";
const officeBearers = [
  {
    src: Convenor,
    position: "Convenor",
    name: "Manish Kumar",
    linkedin: "https://www.linkedin.com/in/manish-kumar46/",
  },
  {
    src: Co_Convenor,
    position: "Co Convenor",
    name: "Deep kumar Dey",
    linkedin: "https://www.linkedin.com/in/deep-kumar-dey-b5741a253/",
  },
  {
    src: Co_Convenor1,
    position: "Co Convenor",
    name: "Md. Affan Ahmed",
    linkedin: "https://www.linkedin.com/in/mdaffanahmad/",
  },
];

const coreTeam = [
  {
    src: Coordinator,
    position: "Coordinator",
    name: "Suraj Pradhan",
    linkedin: "https://www.linkedin.com/in/suraj-pradhan-a6aa39289/",
  },
  {
    src: Co_Coordinator,
    position: "Co-Coordinator",
    name: "Arpita Raj",
    linkedin: "https://www.linkedin.com/in/arpita-raj-0033a0287/",
  },
  {
    src: EventHead1,
    position: "Event Head",
    name: "Rajnee Kant",
    linkedin: "",
  },
  {
    src: EventHead2,
    position: "Event Head",
    name: "Prabal Chandra",
    linkedin: "https://www.linkedin.com/in/prabal-chandra-bera/",
  },
  {
    src: EventHead,
    position: "Event Head",
    name: "Parsh Chandra",
    linkedin: "https://www.linkedin.com/in/parsh-chandra-00b734296/",
  },
  {
    src: Treasurer,
    position: "Treasurer",
    name: "Sushant Rathore",
    linkedin: "https://www.linkedin.com/in/sushant-rathore-691509287/",
  },
  {
    src: AdTreasurerHead,
    position: "Ad. Treasurer Head",
    name: "Abhijit Srivastava",
    linkedin: "",
  },
  {
    src: TechnicalHead,
    position: "Technical Head",
    name: "Sanskar Gupta",
    linkedin: "https://www.linkedin.com/in/sanskar-gupta-16613b284/",
  },
  {
    src: AdTechnicalHead,
    position: "Ad. Technical Head",
    name: "Ravindra Chandela",
    linkedin: "https://www.linkedin.com/in/ravindra-chandela-212016290/",
  },
  {
    src: BDHead,
    position: "BD Head",
    name: "Sidhant Saurav",
    linkedin: "https://www.linkedin.com/in/sidhant-saurav-165162282/",
  },
  {
    src:AdBDHead,
    position: "Ad. BD Head",
    name: "Sumit Bhagat",
    linkedin: "https://www.linkedin.com/in/sumit-bhagat-389525290/",
  },
  {
    src: MediaHead,
    position: "Media Head",
    name: "Naisha Gorli",
    linkedin: "https://www.linkedin.com/in/naisha-gorli-172788288/",
  },
  { 
    src: AdMediaHead,
    position: "Ad. Media Head",
    name: "Shivansh",
    linkedin: "",

  },
  {
    src: LogisticsHead,
    position: "Logistics Head",
    name: "Saksham Kumar",
    linkedin: "https://www.linkedin.com/in/saksham-kumar-055457288/",
  },
  {
    src: AdLogisticsHead,
    position: "Ad. Logistics Head",
    name: "Amit Jana",
    linkedin: "https://www.linkedin.com/in/amit-jana-4203b1287/",
  },
  {
    src: HospitalityHead,
    position: "Hospitality Head",
    name: "Jayaram",
    linkedin: "https://www.linkedin.com/in/jayaram-sai-krishna-motapothula-549a18281/",
  },
  {
    src: AdHospitalityHead,
    position: "Ad. Hospitality Head",
    name: "Vinay",
    linkedin: "https://www.linkedin.com/in/mutyala-vinay-740000293/",
  },
  
  {
    src: PRHead,
    position: "PR Head",
    name: "Aditya Kumar Paswan",
    linkedin: "https://www.linkedin.com/in/adityakrpaswan/",
  },
  {
    src: AdPRHead,
    position: "Ad. PR Head",
    name: "Sunny Kumar",
    linkedin: "https://www.linkedin.com/in/sunny-kumar-974b76287/",

  },
  
  
  {
    src: PromotionHead,
    position: "Promotion Head",
    name: "Ujjwal Kumar",
    linkedin: "https://www.linkedin.com/in/ujjwal-kumar-5149b6287/",
  },
  {
    src: AdPromotionHead,
    position: "Ad. Promotion Head",
    name: "Raj Nayak",
    linkedin: "https://www.linkedin.com/in/raj-nayak-0869b4290/",
  },
  {
    src: DesigningHead,
    position: "Designing Head",
    name: "B. Sai Prasad",
    linkedin: "https://www.linkedin.com/in/b-sai-prasad-b5b527288/",
  },
  {
    src: AdDesigningHead,
    position: "Ad. Designing Head",
    name: "Shreya Sinha",
    linkedin: "https://www.linkedin.com/in/shreya-sinha-997433287/",
  },
  {
    src: MarketingHead,
    position: "Marketing Head",
    name: "Suyash Pandey",
    linkedin: "https://www.linkedin.com/in/suyashpandey1002/",
  },
  {
    src: AdMarketingHead,
    position: "Ad. Marketing Head",
    name: "Ravi Shankar Kumar",
    linkedin: "https://www.linkedin.com/in/ravi-shankar-kumar-819750290/",
  },
  {
    src: DraftingHead,
    position: "Drafting Head",
    name: "Pidathala Tanmayee",
    linkedin: "https://www.linkedin.com/in/tanmayee-pidathala-b3b177288/",
  },
  {
    src: AdDraftingHead,
    position: "Ad. Drafting Head",
    name: "Nayan Kumar Choudhary",
    linkedin: "https://www.linkedin.com/in/nayan-kumar-choudhary-9831731bb/",
  },
  
  {
    src: SecurityHead,
    position: "Security Head",
    name: "Shubham Kumar",
    linkedin: "https://www.linkedin.com/in/shubham-kumar-1667a4231/",
  },
  {
    src: AdSecurityHead,
    position: "Ad. Security Head",
    name: "Shubham yadav",
    linkedin: "https://www.linkedin.com/in/shubham-yadav-837943289/",
  }
];

const developers = [
  {
    src: TechnicalHead,
    position: "Technical Head",
    name: "Sanskar Gupta",
    linkedin: "https://www.linkedin.com/in/sanskar-gupta-16613b284/",
  },
  {
    src: AdTechnicalHead,
    position: "Ad. Technical Head",
    name: "Ravindra Chandela",
    linkedin: "https://www.linkedin.com/in/ravindra-chandela-212016290/",
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
