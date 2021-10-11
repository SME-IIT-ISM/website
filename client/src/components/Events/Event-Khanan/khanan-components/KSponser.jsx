import React from "react";
import { Container, Row, Col } from "reactstrap";
import jsw from "../khanan-img/JSW_Sponsor.jpg";
import epi from "../khanan-img/Epiroc.svg";
import sand from "../khanan-img/Sandvik_sponsor.png";
import web from "../khanan-img/weblibox.png";
import nmdc from "../khanan-img/nmdc.png";
import tm from "../khanan-img/tm.png";
import ds from "../khanan-img/ds.png";
import mcl from "../khanan-img/mcl.jpeg";
import wcl from "../khanan-img/wcl.png";
import ongc from "../khanan-img/ongc.png";
const KSponser = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="k-sub-heading">OUR SPONSORS</h2>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row className="d-flex align-items-center justify-content-center mb-3">
        <Col
          xs="15"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://www.home.sandvik/en/">
                    <img className="Ksponser-logo" src={sand} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p>
                  <b>Title&amp;Platinum Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center mb-3">
        <Col
          xs="15"
          md="3"
          className="d-flex align-items-center justify-content-center"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://www.3ds.com/">
                    <img className="Ksponser-logo" src={ds} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Platinum Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://www.nmdc.co.in/">
                    <img className="Ksponser-logo-n" src={nmdc} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Platinum Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center mb-5"
          xs="10"
          md="3"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://www.ongcindia.com/wps/wcm/connect/en/home">
                    <img className="Ksponser-logo-n" src={ongc} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className=" d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Platinum Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center mb-5">
      <Col
          className="d-flex align-items-center justify-content-center mb-5"
          xs="10"
          md="3"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="http://westerncoal.in/">
                    <img className="Ksponser-logo-s" src={wcl} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-1">
                <p className="text-center">
                  <b>Gold Sponsor </b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center mb-5"
          xs="10"
          md="3"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://www.mahanadicoal.in/">
                    <img className="Ksponser-logo" src={mcl} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className=" d-flex align-items-center justify-content-center k-sponsor-1">
                <p className="text-center">
                  <b> Gold Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5"
        >
          {" "}
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://www.jsw.in/">
                    <img className="Ksponser-logo" src={jsw} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-1">
                <p className="text-center">
                  <b>Gold Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        
        
      </Row>
      <Row className="d-flex align-items-center justify-content-center mb-5">
      <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://www.epiroc.com/">
                    <img className="Ksponser-logo" src={epi} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-top justify-content-center k-sponsor-3">
                <p className="text-center">
                  <b>Silver Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center mb-5"
          xs="10"
          md="3"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://engineersparcel.in/">
                    <img className="Ksponser-logo" src={tm} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className=" d-flex align-items-center justify-content-center k-sponsor-4">
                <p className="text-center">
                  <b> Gifting Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5"
        >
          {" "}
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://www.weblibox.com/">
                    <img className="Ksponser-logo" src={web} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-4">
                <p className="text-center">
                  <b>Gifting Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      
        
      </Row>
    </Container>
  );
};

export default KSponser;
