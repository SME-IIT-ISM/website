import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
class About extends Component {
  state = {};
  render() {
    
    //    var headingStyle={
    //         color:"white",

    //    };
    var imageStyle = {
      width: "90vw",
      height: "65vh",
      opacity: "0.6",
    };
   
    var centered = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    return (
      <div>
        <Header />
        <div className="myStyle">
          <div className="mx-auto imageContainer">
            <img
              className="mx-auto d-block  "
            //   data-mdb-delay 
              style={imageStyle}
              src="https://source.unsplash.com/collection/190727/1600x900"
              alt=""
            ></img>
          </div>
          {/* <div ><p className="text-center fs-1 fw-bold text-decoration-underline " style={ headingStyle}>About</p></div>  */}
          <div
            className=" text-white display-2 fw-bolder text-decoration-underline "
            style={centered}
          >
            About Us
          </div>
          
          <div>
            <Container>
              <div className="left-align">
                <h1 className="heading text-uppercase my-5  heading-block">Who we are</h1>
              </div>
              <Row>
                <Col xs="6" md="6"></Col>
                <Col md="6">
                  {" "}
                  <div className="content text-start">
                    <p>
                      SME IIT(ISM) Students Chapter , an IIT (ISM) Dhanbad
                      student chapter of Society for Mining, Metallurgy &
                      Exploration was inaugurated in May 2011. It was found with
                      the sole purpose of kindling curiosity and interest in the
                      minds of the students of ISM about the field of mining
                      engineering. The society collectively works in the way of
                      making our presence known to the world as a potential body
                      of mining engineers. We serve as the interface between our
                      glorious alumni and our student members in order to enrich
                      them with our alumni's priceless experience and knowledge.
                      The members all aim to inculcate the virtues of
                      professional attitude and involvement towards mining. We
                      put in our best efforts to provide the members with ample
                      global exposure , so that they can learn and adapt
                      themselves according to the rapid developments the sector
                      is going through, and attain enough self-confidence to
                      walk beside the leaders of mining in the world
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>

            <Container>
              {/* <div className="left-align">
                <h1 className="heading text-uppercase my-5 text-start">
                  Vision
                </h1>
              </div> */}
              <Row>
                <Col md="6">
                  <div className="left-align">
                    <h1 className="heading text-uppercase my-5  text-start heading-block">
                      Vision
                    </h1>
                  </div>
                  <div className="content text-start">
                    <p>
                      “By 2022, be the leading Student chapter in mine planning
                      scientific and development, focussed on the needs of the
                      mining industry.”
                    </p>
                  </div>
                </Col>
                <Col md="6">
                  {" "}
                  <div className="left-align">
                    <h1 className="heading text-uppercase my-5 text-start  heading-block">
                      Mission
                    </h1>
                  </div>
                  <div className="content text-start">
                    <p>
                      “To maximise tale an integral approach, and to promote
                      minimum research, corresponding to the needs of companies
                      and society.”
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>

            <Container>
              <div className="left-align">
                <h1 className="heading text-uppercase my-5 text-start  heading-block">
                  Strategic objectives
                </h1>
              </div>
              <Row>
                <Col xs="6" md="6">
                  <div className="content text-start">
                  <ul>
                     <li>Strengthen the technical knowledge of students.</li>
                     <li>Promote scientific research in students.</li>
                     <li>Enhance leadership skills and integration among members.</li>
                     <li>Student representation skills and prestige to the University.</li>
                     <li>Disseminate responsible mining with peruvian society.</li>

                   </ul>
                  </div>
                </Col>
                <Col md="6"></Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
