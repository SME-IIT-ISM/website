import React from "react";
import { Container, Row, Col } from "reactstrap";
import hz from "./sponsers/hz.png";
import cil from "./sponsers/cil.png";
import ve from "./sponsers/ve.jpg";
import ad from "./sponsers/ad.png";
import ccl from "./sponsers/ccl.png";
import ecl from "./sponsers/ecl.png";
import lens from "./sponsers/lens.png";
import mcl from "./sponsers/mcl.png";
import moil from "./sponsers/moil.png";
import ncl from "./sponsers/ncl.png";
import nmdc from "./sponsers/nmdc.png";
import san from "./sponsers/san.png";
import sec from "./sponsers/sec.png";
import ss from "./sponsers/ss.png";
import ucl from "./sponsers/ucl.png";
import wb from "./sponsers/wb.png";

const Sponser = () => {
  return (
    <Container className="sponser-container shadow p-3 mb-5 bg-white rounded">
      <Row>
        <Col className="text-center">
          <h1 className="text-uppercase heading">Industrial Collaborations</h1>
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs="4"
          md="2"
        >
          <a href="https://www.hzlindia.com/">
            <img className="sponser-logo" src={hz} alt="intro" />
          </a>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs="4"
          md="2"
        >
          <a href="https://www.coalindia.in/">
            <img className="sponser-logo" src={cil} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://www.vedantalimited.com/Pages/Home.aspx">
            <img className="sponser-logo" src={ve} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://www.adani.com/">
            <img className="sponser-logo" src={ad} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://www.centralcoalfields.in/ind/index_h.php">
            <img className="sponser-logo" src={ccl} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="http://www.easterncoal.gov.in/">
            <img className="sponser-logo" src={ecl} alt="intro" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://www.lenskart.com/">
            <img className="sponser-logo" src={lens} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://www.mahanadicoal.in/">
            <img className="sponser-logo" src={mcl} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://www.moil.nic.in/">
            <img className="sponser-logo" src={moil} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="http://nclcil.in/">
            <img className="sponser-logo" src={ncl} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://www.ndmc.gov.in/Default.aspx">
            <img className="sponser-logo" src={nmdc} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://www.home.sandvik/en/">
            <img className="sponser-logo" src={san} alt="intro" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="http://www.secl-cil.in/">
            <img className="sponser-logo" src={sec} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://www.thesouledstore.com/">
            <img className="sponser-logo" src={ss} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="http://www.ucil.gov.in/">
            <img className="sponser-logo" src={ucl} alt="intro" />
          </a>
        </Col>
        <Col
          xs="4"
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://www.weblibox.com/">
            <img className="sponser-logo" src={wb} alt="intro" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Sponser;
