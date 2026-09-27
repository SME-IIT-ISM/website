import React, { useEffect } from "react";
import "./ourteam.css";
import { Container, Row, Col } from "reactstrap";
import { RiLinkedinBoxFill } from "react-icons/ri";
import FacultyAdvisor from "./images/FacultyAdvisor.jpg";
import President from "./images/Convenor.jpg";
import VicePresident from "./images/Co_Convenor.jpg";
import SecretaryERAA from "./images/Co_Convenor1.jpeg";
import Secretary from "./images/Coordinator.jpeg";
import AdSecretary from "./images/Co_Coordinator.jpeg";
import BDHead from "./images/BDHead.jpeg";
import AdBDHead from "./images/AdBDHead.png";
// import EventHead from "./images/EventHead.jpg";
import EventHead1 from "./images/EventHead1.jpeg";
import EventHead2 from "./images/EventHead2.jpeg";
import Treasurer from "./images/Treasurer.jpg";
import AdTreasurerHead from "./images/AdTreasurerHead.jpeg";
import DesigningHead from "./images/DesigningHead.jpeg";
import AdDesigningHead from "./images/AdDesigningHead.jpeg";
import PRHead from "./images/PRHead.jpeg";
import AdPRHead from "./images/AdPRHead.jpeg";
import TechnicalHead from "./images/TechnicalHead.jpeg";
import AdTechnicalHead from "./images/AdTechnicalHead.jpeg";
import MediaHead from "./images/MediaHead.jpeg";
import AdMediaHead from "./images/AdMediaHead.jpeg";
import PromotionHead from "./images/PromotionHead.jpeg";
import AdPromotionHead from "./images/AdPromotionHead.jpeg";
import MarketingHead from "./images/MarketingHead.jpeg";
import AdMarketingHead from "./images/AdMarketingHead.jpg";
import DraftingHead from "./images/DraftingHead.jpeg";
import AdDraftingHead from "./images/AdDraftingHead.jpeg";
import LogisticsHead from "./images/LogisticsHead.jpeg";
import AdLogisticsHead from "./images/AdLogisticsHead.jpg";
import MembershipHead from "./images/MembershipHead.jpeg";
// import AdSecurityHead from "./images/ProfileIcon.jpg";
// import HospitalityHead from "./images/HospitalityHead.jpg";
// import AdHospitalityHead from "./images/AdHospitalityHead.jpg";
const officeBearers = [
  {
    src: President,
    position: "President",
    name: "Suraj Pradhan",
    linkedin: "https://www.linkedin.com/in/suraj-pradhan-a6aa39289/",
  },
  {
    src: VicePresident,
    position: "Vice President",
    name: "Arpita Raj",
    linkedin: "https://www.linkedin.com/in/arpita-raj-0033a0287/",
  },
  {
    src: SecretaryERAA,
    position: "Secretary, ERAA",
    name: "Sidhant Saurav",
    linkedin: "https://www.linkedin.com/in/sidhant-saurav-165162282/",
  },
];

const coreTeam = [
  {
    src: Secretary,
    position: "Secretary",
    name: "Anubhav Sinha",
    linkedin: "https://www.linkedin.com/in/anubhav-sinha-34aba2276/",
  },
  {
    src: AdSecretary,
    position: "Ad. Secretary",
    name: "Ankur Raj",
    linkedin: "https://www.linkedin.com/in/ankur-raj-662521319/",
  },
  {
    src: EventHead1,
    position: "Event Head",
    name: "Gyan Prakash",
    linkedin: "https://www.linkedin.com/in/gyan-prakash-00528031a/",
  },
  {
    src: EventHead2,
    position: "Ad. Event Head",
    name: "Swapnil Kumar",
    linkedin: "https://www.linkedin.com/in/swapnilkr2006/",
  },
  // {
  //   src: EventHead,
  //   position: "Event Head",
  //   name: "Parsh Chandra",
  //   linkedin: "https://www.linkedin.com/in/parsh-chandra-00b734296/",
  // },
  {
    src: Treasurer,
    position: "Treasurer",
    name: "Sushant Rathore",
    linkedin: "https://www.linkedin.com/in/sushant-rathore-691509287/",
  },
  {
    src: AdTreasurerHead,
    position: "Ad. Treasurer",
    name: "Arush Chandra",
    linkedin: "https://www.linkedin.com/in/arushchandra//",
  },
  {
    src: TechnicalHead,
    position: "Technical Head",
    name: "Anshul Anand",
    linkedin: "https://www.linkedin.com/in/anshul-anand-83105a317/",
  },
  {
    src: AdTechnicalHead,
    position: "Ad. Technical Head",
    name: "Ranadeep Saha",
    linkedin: "https://www.linkedin.com/in/ranadeep-saha-939bb1319/",
  },
  {
    src: BDHead,
    position: "Business Dev Head",
    name: "Harshal Paliwal",
    linkedin: "https://www.linkedin.com/in/harshal-paliwal-144975320/",
  },
  {
    src:AdBDHead,
    position: "Ad. Business Dev Head",
    name: "Nipun Shekhar",
    linkedin: "https://www.linkedin.com/in/nipun-shekhar/",
  },
  {
    src: MediaHead,
    position: "Media Head",
    name: "Jinay Jain",
    linkedin: "https://www.linkedin.com/in/jinay-jain-/",
  },
  { 
    src: AdMediaHead,
    position: "Ad. Media Head",
    name: "Manideep Tummuri",
    linkedin: "https://www.linkedin.com/in/manideep-tummuri-6a0000320/",

  },
  {
    src: LogisticsHead,
    position: "Logistics Head",
    name: "Kazi Sabyasachi",
    linkedin: "https://www.linkedin.com/in/kazi-sabyasachi-islam-b07602320/",
  },
  {
    src: AdLogisticsHead,
    position: "Ad. Logistics Head",
    name: "K.Dheeraj Kumar",
    linkedin: "https://www.linkedin.com/in/amit-jana-4203b1287/",
  },
  // {
  //   src: HospitalityHead,
  //   position: "Hospitality Head",
  //   name: "Jayaram",
  //   linkedin: "https://www.linkedin.com/in/jayaram-sai-krishna-motapothula-549a18281/",
  // },
  // {
  //   src: AdHospitalityHead,
  //   position: "Ad. Hospitality Head",
  //   name: "Vinay",
  //   linkedin: "https://www.linkedin.com/in/mutyala-vinay-740000293/",
  // },
  
  {
    src: PRHead,
    position: "Public Relation Head",
    name: "Gurrala Akshay Reddy",
    linkedin: "https://www.linkedin.com/in/akshay-reddy-gurrala-35695b353/",
  },
  {
    src: AdPRHead,
    position: "Ad. Public Relation Head",
    name: "Swasti Sundar Nath",
    linkedin: "https://www.linkedin.com/in/swasti-nath-b94827320/",

  },
  
  
  {
    src: PromotionHead,
    position: "Promotion Head",
    name: "Shashwat Pratap Singh",
    linkedin: "https://www.linkedin.com/in/shashwat-pratap-singh-33710a320/",
  },
  {
    src: AdPromotionHead,
    position: "Ad. Promotion Head",
    name: "Sakshi Priya",
    linkedin: "https://www.linkedin.com/in/sakshi-priya-02389b252/",
  },
  {
    src: DesigningHead,
    position: "Designing Head",
    name: "Devanshu Chotiya",
    linkedin: "https://www.linkedin.com/in/devanshu-chotiya-52110b320/",
  },
  {
    src: AdDesigningHead,
    position: "Ad. Designing Head",
    name: "Rachit Kumar Padhan",
    linkedin: "https://www.linkedin.com/in/rachit-kumar-padhan-7a573631a/",
  },
  {
    src: MarketingHead,
    position: "Marketing Head",
    name: "Sidhi Sen",
    linkedin: "https://www.linkedin.com/in/siddhisen/",
  },
  {
    src: AdMarketingHead,
    position: "Ad. Marketing Head",
    name: "Ramagiri Vismaya",
    linkedin: "https://www.linkedin.com/in/vismaya-ramagiri-202661321/",
  },
  {
    src: DraftingHead,
    position: "Drafting Head",
    name: "Archita Singh",
    linkedin: "https://www.linkedin.com/in/archita-singh-485701320/",
  },
  {
    src: AdDraftingHead,
    position: "Ad. Drafting Head",
    name: "Iswarya Vardhani",
    linkedin: "https://www.linkedin.com/in/iswarya-vardhani-a99356325/",
  },
  
  {
    src: MembershipHead,
    position: "Membership Head",
    name: "Shaik Afifha",
    linkedin: "https://www.linkedin.com/in/afifha-shaik-4b9667320/",
  },
  // {
  //   src: AdSecurityHead,
  //   position: "Ad. Security Head",
  //   name: "Shubham yadav",
  //   linkedin: "https://www.linkedin.com/in/shubham-yadav-837943289/",
  // }
];

const developers = [
  {
    src: TechnicalHead,
    position: "Technical Head",
    name: "Anshul Anand",
    linkedin: "https://www.linkedin.com/in/anshul-anand-83105a317/",
  },
  {
    src: AdTechnicalHead,
    position: "Ad. Technical Head",
    name: "Ranadeep Saha",
    linkedin: "https://www.linkedin.com/in/ranadeep-saha-939bb1319/",
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
          <Row className="justify-content-center">
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
