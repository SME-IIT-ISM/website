import React, { useState } from "react";
import "./gallery.css";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";
import GHImage1 from "./BackgroundGalleryA.jpg";
import ALUMNIMEET1 from "./ALUMNIMEET/ALUMNIMEET1.jpg";
import ALUMNIMEET2 from "./ALUMNIMEET/ALUMNIMEET2.jpg";
import ALUMNIMEET3 from "./ALUMNIMEET/ALUMNIMEET3.jpg";
import ALUMNIMEET4 from "./ALUMNIMEET/ALUMNIMEET4.jpg";
import ALUMNIMEET5 from "./ALUMNIMEET/ALUMNIMEET5.jpg";
import ALUMNIMEET6 from "./ALUMNIMEET/ALUMNIMEET6.jpg";
import AwardsAndAppreciation1 from "./AwardsAndAppreciation/AwardsAndAppreciation1.jpg";
import AwardsAndAppreciation2 from "./AwardsAndAppreciation/AwardsAndAppreciation2.jpg";
import AwardsAndAppreciation3 from "./AwardsAndAppreciation/AwardsAndAppreciation3.jpg";
import AwardsAndAppreciation4 from "./AwardsAndAppreciation/AwardsAndAppreciation4.jpg";
import DiwaliCelebration1 from "./DiwaliCelebration/DiwaliCelebration1.jpg";
import DiwaliCelebration2 from "./DiwaliCelebration/DiwaliCelebration2.jpg";
import EssayCompetition1 from "./EssayCompetition/EssayCompetition1.jpg";
import EssayCompetition2 from "./EssayCompetition/EssayCompetition2.jpg";
import EssayCompetition3 from "./EssayCompetition/EssayCompetition3.jpg";
import EssayCompetition4 from "./EssayCompetition/EssayCompetition4.jpg";
import KHANAN181 from "./KHANAN18/KHANAN181.jpg";
import KHANAN182 from "./KHANAN18/KHANAN182.jpg";
import KHANAN183 from "./KHANAN18/KHANAN183.jpg";
import KHANAN184 from "./KHANAN18/KHANAN184.jpg";
import KHANAN185 from "./KHANAN18/KHANAN185.jpg";
import KHANAN186 from "./KHANAN18/KHANAN186.jpg";
import KHANAN187 from "./KHANAN18/KHANAN187.jpg";
import KHANAN188 from "./KHANAN18/KHANAN188.jpg";
import KHANAN189 from "./KHANAN18/KHANAN189.jpg";
import KHANAN1810 from "./KHANAN18/KHANAN1810.jpg";
import KHANAN1811 from "./KHANAN18/KHANAN1811.jpg";
import Kryptos1 from "./Kryptos/Kryptos1.jpg";
import KHANAN191 from "./KHANAN19/KHANAN191.jpg";
import KHANAN192 from "./KHANAN19/KHANAN192.jpg";
import KHANAN193 from "./KHANAN19/KHANAN193.jpg";
import MiningDay191 from "./MiningDay19/MiningDay191.jpg";
import MiningDay192 from "./MiningDay19/MiningDay192.jpg";
import MiningDay193 from "./MiningDay19/MiningDay193.jpg";
import MiningDay194 from "./MiningDay19/MiningDay194.jpg";
import MiningDay195 from "./MiningDay19/MiningDay195.jpg";
import MiningDay196 from "./MiningDay19/MiningDay196.jpg";
import Minnovare1 from "./Minnovare/Minnovare1.jpg";
import Minnovare2 from "./Minnovare/Minnovare2.jpg";
import Minnovare3 from "./Minnovare/Minnovare3.jpg";
import QuizCompetition1 from "./QuizCompetition/QuizCompetition1.jpg";
import QuizCompetition2 from "./QuizCompetition/QuizCompetition2.jpg";
import QuizCompetition3 from "./QuizCompetition/QuizCompetition3.jpg";
import SMEInductions1 from "./SMEInductions/SMEInductions1.jpg";
import SMEInductions2 from "./SMEInductions/SMEInductions2.jpg";
import SMEInductions3 from "./SMEInductions/SMEInductions3.jpg";

const tabs = [
  "All",
  "Alumni Meet",
  "Awards & Appreciation",
  "Diwali",
  "Essay Competition",
  "Khanan'18",
  "Khanan'19",
  "Kryptos",
  "Mining Day 19",
  "Minnovare",
  "Quiz Competition",
  "SME Inductions",
];

const ALLPhotos = [
  {
    src: ALUMNIMEET1,
    alt: "ALUMNIMEET1",
    event: "Alumni Meet",
  },
  {
    src: ALUMNIMEET2,
    alt: "ALUMNIMEET2",
    event: "Alumni Meet",
  },
  {
    src: ALUMNIMEET3,
    alt: "ALUMNIMEET3",
    event: "Alumni Meet",
  },
  {
    src: ALUMNIMEET4,
    alt: "ALUMNIMEET4",
    event: "Alumni Meet",
  },
  {
    src: ALUMNIMEET5,
    alt: "ALUMNIMEET5",
    event: "Alumni Meet",
  },
  {
    src: ALUMNIMEET6,
    alt: "ALUMNIMEET6",
    event: "Alumni Meet",
  },
  {
    src: AwardsAndAppreciation1,
    alt: "AwardsAndAppreciation1",
    event: "Awards & Appreciation",
  },
  {
    src: AwardsAndAppreciation2,
    alt: "AwardsAndAppreciation2",
    event: "Awards & Appreciation",
  },
  {
    src: AwardsAndAppreciation3,
    alt: "AwardsAndAppreciation3",
    event: "Awards & Appreciation",
  },
  {
    src: AwardsAndAppreciation4,
    alt: "AwardsAndAppreciation4",
    event: "Awards & Appreciation",
  },
  {
    src: DiwaliCelebration1,
    alt: "DiwaliCelebration1",
    event: "Diwali",
  },
  {
    src: DiwaliCelebration2,
    alt: "DiwaliCelebration2",
    event: "Diwali",
  },
  {
    src: EssayCompetition1,
    alt: "EssayCompetition1",
    event: "Essay Competition",
  },
  {
    src: EssayCompetition2,
    alt: "EssayCompetition2",
    event: "Essay Competition",
  },
  {
    src: EssayCompetition3,
    alt: "EssayCompetition3",
    event: "Essay Competition",
  },
  {
    src: EssayCompetition4,
    alt: "EssayCompetition4",
    event: "Essay Competition",
  },
  {
    src: KHANAN181,
    alt: "KHANAN181",
    event: "Khanan'18",
  },
  {
    src: KHANAN182,
    alt: "KHANAN182",
    event: "Khanan'18",
  },
  {
    src: KHANAN183,
    alt: "KHANAN183",
    event: "Khanan'18",
  },
  {
    src: KHANAN184,
    alt: "KHANAN184",
    event: "Khanan'18",
  },
  {
    src: KHANAN185,
    alt: "KHANAN185",
    event: "Khanan'18",
  },
  {
    src: KHANAN186,
    alt: "KHANAN186",
    event: "Khanan'18",
  },
  {
    src: KHANAN187,
    alt: "KHANAN187",
    event: "Khanan'18",
  },
  {
    src: KHANAN188,
    alt: "KHANAN188",
    event: "Khanan'18",
  },
  {
    src: KHANAN189,
    alt: "KHANAN189",
    event: "Khanan'18",
  },
  {
    src: KHANAN1810,
    alt: "KHANAN1810",
    event: "Khanan'18",
  },
  {
    src: KHANAN1811,
    alt: "KHANAN1811",
    event: "Khanan'18",
  },
  {
    src: Kryptos1,
    alt: "Kryptos1",
    event: "Kryptos",
  },
  {
    src: KHANAN191,
    alt: "KHANAN191",
    event: "Khanan'19",
  },
  {
    src: KHANAN192,
    alt: "KHANAN192",
    event: "Khanan'19",
  },
  {
    src: KHANAN193,
    alt: "KHANAN193",
    event: "Khanan'19",
  },
  {
    src: MiningDay191,
    alt: "MiningDay191",
    event: "Mining Day 19",
  },
  {
    src: MiningDay192,
    alt: "MiningDay192",
    event: "Mining Day 19",
  },
  {
    src: MiningDay193,
    alt: "MiningDay193",
    event: "Mining Day 19",
  },
  {
    src: MiningDay194,
    alt: "MiningDay194",
    event: "Mining Day 19",
  },
  {
    src: MiningDay195,
    alt: "MiningDay195",
    event: "Mining Day 19",
  },
  {
    src: MiningDay196,
    alt: "MiningDay196",
    event: "Mining Day 19",
  },
  {
    src: Minnovare1,
    alt: "Minnovare1",
    event: "Minnovare",
  },
  {
    src: Minnovare2,
    alt: "Minnovare2",
    event: "Minnovare",
  },
  {
    src: Minnovare3,
    alt: "Minnovare3",
    event: "Minnovare",
  },
  {
    src: QuizCompetition1,
    alt: "QuizCompetition1",
    event: "Quiz Competition",
  },
  {
    src: QuizCompetition2,
    alt: "QuizCompetition2",
    event: "Quiz Competition",
  },
  {
    src: QuizCompetition3,
    alt: "QuizCompetition3",
    event: "Quiz Competition",
  },
  {
    src: SMEInductions1,
    alt: "SMEInductions1",
    event: "SME Inductions",
  },

  {
    src: SMEInductions2,
    alt: "SMEInductions2",
    event: "SME Inductions",
  },

  {
    src: SMEInductions3,
    alt: "SMEInductions3",
    event: "SME Inductions",
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Container className="GH-intro">
        <Row className="pt-md-5">
          <Col
            xs="12"
            md="6"
            className="d-flex py-5 align-items-center justify-content-center order-2 order-md-1"
          >
            <Card className="GHImage1">
              <CardImg
                className="GH"
                top
                width="100%"
                src={GHImage1}
                alt="Card image cap"
              />
              <CardBody className="Imagetext">
                <CardTitle tag="h5">National Mining Day</CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6" className="d-flex flex-column order-1 order-md-2">
            <div className="h1 text-white GHText1">Welcome to our Memories</div>
            <div className="h4 text-white display-6 GHText2">
              Take a trip down our memory lane
            </div>
          </Col>
        </Row>
      </Container>
      <Nav tabs className="m-4 justify-content-center">
        {tabs.map((item, index) => {
          return (
            <NavItem className="p-1">
              <NavLink
                className={`gallery-nav ${activeTab === index ? "active" : ""}`}
                onClick={() => {
                  toggle(index);
                }}
              >
                {item}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={0}>
          <Row>
            <Col xs="12">
              <div className="container1 my-3">
                {ALLPhotos.map((item, index) => {
                  return (
                    <div key={index} className="GalleryAllContainer">
                      <img
                        className="GalleryAllSize all"
                        src={item.src}
                        alt={item.alt}
                      ></img>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </TabPane>

        {tabs
          .filter((item) => item !== "All")
          .map((it, id) => {
            return (
              <TabPane tabId={id + 1}>
                <Row>
                  <Col xs="12">
                    <div className="container1 my-3">
                      {ALLPhotos.filter(
                        (item) => item.event === tabs[id + 1]
                      ).map((item, index) => {
                        return (
                          <div key={index} className="GalleryAllContainer">
                            <img
                              className="GalleryAllSize"
                              src={item.src}
                              alt={item.alt}
                            ></img>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
              </TabPane>
            );
          })}
      </TabContent>
    </div>
  );
};

export default Gallery;
