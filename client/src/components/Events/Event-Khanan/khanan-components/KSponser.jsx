import React from "react";
import { Container, Row, Col } from "reactstrap";
import moil from "../khanan-img/moil.png";
import secl from "../khanan-img/SECL.jpg";
import bccl from "../khanan-img/bccl.png";
import webli from "../khanan-img/weblihouse.jpg";
import gianis from "../khanan-img/gianis.jpg";
import omc from "../khanan-img/omd.png";
import kurtos from "../khanan-img/kurtos.jpg";
import hcc from "../khanan-img/hcc.png";
import wcl from "./Khanan-sposnors-2k24/wcl.png";
import DMSl from "./Khanan-sposnors-2k24/DMSL.png";
import NTPCMINE from "./Khanan-sposnors-2k24/NTPCMINE.png";
import bombayspices from "./Khanan-sposnors-2k24/Bombayfood.png";
import MiningGyan from "./Khanan-sposnors-2k24/MiningGyan.png";
import ECL from "./Khanan-sposnors-2k24/ECL Logo.jpg"
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

      <div className="Clickable" style={{
        display:'flex',
        justifyContent:'center'
      }}>
        <a href="http://www.secl-cil.in/" style={{
          marginRight:'85px',
          cursor:'pointer'
        }}>
          <img className="Ksponser-logo" src={secl} alt="intro" />
        </a>
        <a href="https://easterncoal.nic.in/">
          <img className="Ksponser-logo" src={ECL} alt="intro" />
        </a>
      </div>
      <div className="Clickable" style={{
        display:'flex',
        justifyContent:'center',
        color:'white',
        margin:'30px'
      }}>Gold Sponsor</div>

      <Row className="d-flex align-items-center justify-content-center mb-6">
        <Col
          xs="15"
          md="6"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://www.westerncoal.in/">
                    <img className="Ksponser-logo" src={wcl} alt="intro" />
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
          <Col
            xs="15"
            md="6"
            className="d-flex align-items-center justify-content-center mb-5 mt-5"
          >
            <Container>
              <Row>
                <Col className="d-flex align-items-center justify-content-center">
                  <div className="Clickable">
                    <a href="https://www.dfpcl.com/">
                      <img className="Ksponser-logo" src={DMSl} alt="intro" />
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

          <Col
            xs="15"
            md="6"
            className="d-flex align-items-center justify-content-center mb-5 mt-5"
          >
            <Container>
              <Row>
                <Col className="d-flex align-items-center justify-content-center">
                  <div className="Clickable">
                    <a href="https://ntpc.co.in/power-generation/coal-mines">
                      <img
                        className="Ksponser-logo"
                        src={NTPCMINE}
                        alt="intro"
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                  <p className="text-center">
                    <b>Assosciate Sponsor</b>
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
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
                  <a href="MiningGyan">
                    <img
                      className="Ksponser-logo"
                      src={MiningGyan}
                      alt="intro"
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Assosciate Sponsor</b>
                </p>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="#">
                    <img
                      className="Ksponser-logo"
                      src={bombayspices}
                      alt="intro"
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center" style={{
                  marginTop:'20px'
                }}>
                  <b>Food Partner </b>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row className="d-flex align-items-center justify-content-center mb-6">
        {/* <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        >
          
        </Col> */}

        <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        ></Col>
      </Row>
    </Container>
  );
};

export default KSponser;
