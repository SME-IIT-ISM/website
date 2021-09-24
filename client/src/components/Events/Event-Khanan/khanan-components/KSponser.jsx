import React from "react";
import { Container, Row, Col } from "reactstrap";
import jsw from "../khanan-img/JSW_Sponsor.png";
import epi from "../khanan-img/Epiroc.png";
import sand from "../khanan-img/Sandvik_sponsor.png";
import web from "../khanan-img/weblibox.png";


const KSponser = () => {
  return (
    <Container >
      <Row>
      <Col>
          <h2 className="k-sub-heading">OUR SPONSORS</h2>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <Row >
      <Col
          xs="10"
          
          md="3"
          className="d-flex align-items-center justify-content-center mb-5"
        >
          <br/>
          <div className="ksponsor">
            <img className="Ksponser-logo" src={sand} alt="intro" />
          </div>
          
          <p className="k-sponsor-3" id="plat">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Platinum Sponsor</p>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center mb-5"
          xs="10"
          
          md="3"
        >
          <div className="ksponsor">
          <img className="Ksponser-logo-s" src={jsw} alt="intro"  />
          </div>
          <p className="k-sponsor-1">&nbsp;&nbsp;Gold Sponsor </p>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center mb-5"
          xs="10" 
          md="3"
        >
          <div className="ksponsor" >
            <img className="Ksponser-logo" src={epi} alt="intro" />
          </div>
          <p className="k-sponsor-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Silver Sponsor</p>
        </Col>
  
        <Col
          xs="10"
          
          md="3"
          className="d-flex align-items-center justify-content-center mb-5"
        >
          <div className="ksponsor" >
            <img className="Ksponser-logo" src={web} alt="intro" />
          </div>
          <p className="k-sponsor-4" id="gift">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gifting Partner</p>
        </Col>
      </Row>
      <br/>
      <br/>
    </Container>
  );
};

export default KSponser;
