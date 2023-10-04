import React from "react";
import { Container, Row, Col } from "reactstrap";
import moil from "../khanan-img/moil.png";
import secl from "../khanan-img/SECL.jpg";
import bccl from "../khanan-img/bccl.png";
import webli from "../khanan-img/weblihouse.jpg"
import jsw from "../khanan-img/jsw.png";
import ntpc from "../khanan-img/ntpc.png";
import gianis from "../khanan-img/gianis.jpg"
import omc from "../khanan-img/omd.png";
import good from "../khanan-img/good.jpg";
import kurtos from "../khanan-img/kurtos.jpg";
import hcc from "../khanan-img/hcc.png";
import nlc from "../khanan-img/nlc.png";



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
                  <img className="Ksponser-logo gold-sponsor" style={{width: "20vw"}} src={omc} alt="intro" />
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
                  <b>Gold Sponsor</b>
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
                    <img className="Ksponser-logo" src={moil} alt="intro" />
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
          xs="15"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://www.bcclweb.in/">
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

        {/* <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        >
         
        </Col> */}

      </Row>


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
                  <a href="https://www.ntpc.co.in/">
                    <img className="Ksponser-logo" src={ntpc} alt="intro" />
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
                  <a href="https://www.ntpc.co.in/">
                    <img className="Ksponser-logo" src={nlc} alt="intro" />
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
                  <a href="https://www.jsw.in/">
                    <img className="Ksponser-logo" src={jsw} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Logistics Sponsor</b>
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
                  <a href="#">
                    <img className="Ksponser-logo" src={gianis} alt="intro" />
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
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://weblihouse-the-blended-book-cafe.business.site/">
                    <img className="Ksponser-logo" src={webli} alt="intro" />
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
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="https://weblihouse-the-blended-book-cafe.business.site/">
                    <img className="Ksponser-logo" src={kurtos} alt="intro" />
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
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="#">
                    <img className="Ksponser-logo" src={good} alt="intro" />
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
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="Clickable">
                  <a href="http://www.secl-cil.in/">
                    <img className="Ksponser-logo" src={hcc} alt="intro" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center k-sponsor-2">
                <p className="text-center">
                  <b>Hospitality Partner</b>
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
