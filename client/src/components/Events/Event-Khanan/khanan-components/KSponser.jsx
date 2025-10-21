import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import tatasteel from "../khanan-img/Tatasteel.png"
import secl from "../khanan-img/SECL.jpg";
import ECL from "./Khanan-sposnors-2k24/ECL Logo.jpg";
import wcl from "./Khanan-sposnors-2k24/wcl.png";
import DMSL from "./Khanan-sposnors-2k24/DMSL.png";
import NTPCMINE from "./Khanan-sposnors-2k24/NTPCMINE.png";
import bombayspices from "./Khanan-sposnors-2k24/Bombayfood.png";
import MiningGyan from "./Khanan-sposnors-2k24/MiningGyan.png";
import mcl from "../khanan-img/mcl.png"
import dmsl from "../khanan-img/dmsl.jpg"
import  hzl from "../khanan-img/HZL logo.jpg"
import  vedanta from "../khanan-img/vedanta.jpg"
import  jindalsteel from "../khanan-img/jindalsteel.png"

const sponsors = [
  { img: tatasteel, name: "Tata Steel", type: "Associate", },
   { img: vedanta, name: "Vedanta", type: "Associate", },
  { img: dmsl, name: "DMSL", type: "Associate", },
  { img: NTPCMINE, name: "NML", type: "Bronze", },
  { img: mcl, name: "MCL", type: "Associate",  },
   { img: hzl, name: "HZL", type: "Platinum",  },
      { img: jindalsteel, name: "Jindal Steel", type: "Platinum",  },
];

const sponsorTypes = ["Gold","Platinum", "Bronze","Associate", "Partner"];

const KSponser = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 k-sub-heading">OUR SPONSORS</h2>

      {sponsorTypes.map((type) => {
        const filteredSponsors = sponsors.filter((s) => s.type === type);
        if (!filteredSponsors.length) return null;

        return (
          <div key={type} className="mb-5">
            <h3 className="text-center mb-5  text-white ">{type} Sponsor{filteredSponsors.length > 1 ? "s" : ""}</h3>
            <Row className="justify-content-center">
              {filteredSponsors.map((sponsor, idx) => (
                <Col xs="12" sm="6" md="4" lg="3" key={idx} className="mb-4 d-flex justify-content-center">
                  <Card className="sponsor-card shadow-sm">
                    <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <img src={sponsor.img} alt={sponsor.name} className="Ksponser-logo card-img-top" />
                    </a>
                    <CardBody className="text-center">
                      <CardTitle tag="h5">{sponsor.name}</CardTitle>
                     
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default KSponser;
