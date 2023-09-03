import React from "react";
import { Container, Row, Col } from "reactstrap";
import bccl from "../khanan-img/bccl.png";
import secl from "../khanan-img/SECL.jpg";
import omd from "../khanan-img/omd.png";
import sand from "../khanan-img/Sandvik_sponsor.png";
import dass from "../khanan-img/3DS.png";
import nmdc from "../khanan-img/nmdc.png";
import tm from "../khanan-img/tm.png";
import ds from "../khanan-img/ds.png";
import mcl from "../khanan-img/mcl.jpeg";
import wcl from "../khanan-img/wcl.png";
import ongc from "../khanan-img/ongc.png";
import chicago from "../khanan-img/chicago pizza logo.png";
import weblibox from "../khanan-img/weblibox.png";
import weblihouse from "../khanan-img/weblihouse.jpeg";


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
      <Row className="d-flex align-items-center justify-content-center mb-6">
        <Col
          xs="15"
          md="3"
          className="d-flex align-items-center justify-content-center mb-6"
        >
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <div className="Clickable">
                <a href="https://omcltd.in/">
                  <img className="Ksponser-logo gold-sponsor" style={{width: "20vw"}} src={omd} alt="intro" />
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
              <p className="text-center">
                <b>Gold Sponsor</b>
              </p>
            </Col>
          </Row>
        </Container>
        </Col>
      </Row>

      <Row className="d-flex align-items-center justify-content-center mb-6">
        <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="http://www.secl-cil.in/">
                    <img className="Ksponser-logo" src={secl} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Silver Sponsor</b>
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
                  <a href="http://www.secl-cil.in/">
                    <img className="Ksponser-logo" src={bccl}  style={{width: "10vw"}}alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Silver Sponsor</b>
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
                  <a href="http://www.secl-cil.in/">
                    <img className="Ksponser-logo" src={dass} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Silver Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>

      </Row>


      <Row className="d-flex align-items-center justify-content-center mb-6">

        <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="http://www.secl-cil.in/">
                    <img className="Ksponser-logo" src={sand} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Bronze Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>

      </Row>

      <Row className="d-flex align-items-center justify-content-center mb-6">

        <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="http://www.secl-cil.in/">
                    <img className="Ksponser-logo" src={chicago} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Food Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>

      </Row>

      <Row className="d-flex align-items-center justify-content-center mb-6">

        <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="http://www.secl-cil.in/">
                    <img className="Ksponser-logo" src={weblibox} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Gift Sponsor</b>
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
                  <a href="http://www.secl-cil.in/">
                    <img className="Ksponser-logo" src={weblihouse} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Gift Sponsor</b>
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
