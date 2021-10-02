import React from "react";
import { Container, Row, Col } from "reactstrap";
import jsw from "../khanan-img/JSW_Sponsor.png";
import epi from "../khanan-img/Epiroc.png";
import sand from "../khanan-img/Sandvik_sponsor.png";
import web from "../khanan-img/weblibox.png";
import nmdc from "../khanan-img/nmdc.png";
import tm from "../khanan-img/tm.png";
import ds from "../khanan-img/ds.jpg";

const KSponser = () => {
  return (
    <Container >
      <Row>
      <Col>
          <h2 className="k-sub-heading">&nbsp;&nbsp;OUR SPONSORS</h2>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <Row  className="d-flex align-items-center justify-content-center mb-3">
      <Col
          xs="10"
          
          md="3"
          className="d-flex align-items-center justify-content-center mb-5"
        >
          <div className="ksponsor">
          <a href="https://www.home.sandvik/en/"><img className="Ksponser-logo" src={sand} alt="intro" /></a>
          </div>
          
          <p className="k-sponsor-3" id="plat"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title&nbsp;&amp;&nbsp;Platinum Sponsor</b></p>
        </Col>
        <Col
          xs="10"
          md="3"
          className="d-flex align-items-center justify-content-center mb-5 mt-5"
        >
          <div className="ksponsor">
            <a href="https://www.nmdc.co.in/">
            <img className="Ksponser-logo-n" src={nmdc} alt="intro" /></a>
          </div>
          
          <p className="k-sponsor-3" id="plat"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Platinum Sponsor</b></p>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center mb-5"
          xs="10"
          
          md="3"
        >
          <div className="ksponsor">
            <a href="https://www.jsw.in/">
          <img className="Ksponser-logo-s" src={jsw} alt="intro"  />
          </a>
          </div>
          <p className="k-sponsor-1"><b>&nbsp;&nbsp;Gold Sponsor </b></p>
        </Col>

      </Row>
      <Row  className="d-flex align-items-center justify-content-center mb-5" className="d-flex align-items-center justify-content-center mb-5 mt-5">
      <Col
          className="d-flex align-items-center justify-content-center mb-5"
          xs="10" 
          md="3"
        >
          <div className="ksponsor" >
            <a href="https://www.epiroc.com/">
            <img className="Ksponser-logo" src={epi} alt="intro" />
            </a>
          </div>
          <p className="k-sponsor-2"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Silver Sponsor</b></p>
        </Col>
      <Col
          xs="10"
          
          md="3"
          className="d-flex align-items-center justify-content-center mb-5"
        >
          <div className="ksponsor" >
            <a href="https://www.weblibox.com/">
            <img className="Ksponser-logo" src={web} alt="intro" />
            </a>
          </div>
          <p className="k-sponsor-4" id="gift"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gifting Partner</b></p>
        </Col>
        <Col
          xs="10"
          
          md="3"
          className="d-flex align-items-center justify-content-center mb-5"
        >
          <div className="ksponsor" >
            <a href="https://www.linkedin.com/company/engineers-parcel/about/">
            <img className="Ksponser-logo" src={tm} alt="intro" />
            </a>
          </div>
          <p className="k-sponsor-5" id="gift"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gifting Partner</b></p>
        </Col>
        </Row>
    </Container>
  );
};

export default KSponser;
