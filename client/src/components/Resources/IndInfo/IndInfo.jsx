import React from "react";
import "./indInfo.css";
import { Container, Row, Col } from "reactstrap";
import InfoCardL from "./IndinfoCard";
import Info from "./event-page-img.jpg";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InfoPage from "./IndinfoPage";

const infoData = [
  {
    src: Info,
    title: "Poster Competion",
    para: "A virtual “WOMINE” event was organized on 10 April 2020 by SME IIT(ISM) Student Chapter for all the budding female engineers, who look up to a career in the mining field. The event witnessed the huge participation of girls from different institutions all over India. As event speakers, we invited some phenomenal women with extensive knowledge and years of experience in the Mining and Mineral Industry.",
  },
  {
    src: Info,
    title: "UPSC Career Insight",
    para: "SME IIT(ISM) Student Chapter, in collaboration with Udaan(@udaan.iitism ), the career club of IIT(ISM) Dhanbad is organizing an event on the most prestigious examination of the country for entry into the elite civil services, UPSC. The guest speaker for the event is Mr. Jay Shivani (@jayshivani ) - IAS of batch 2019, AIR-81 in UPSC CSE 2018, currently posted as Assistant Commissioner at Dibrugarh, Assam.",
  },
  {
    src: Info,
    title: "INTERN TALKS",
    para: "SME IIT(ISM) DHANBAD is going to organize an INTERN TALK session on 16th May. Seniors nailing their internship season with commendable achievements, will share their experiences and resolve all your doubts.",
  },
  {
    src: Info,
    title: "PLACEMENT TALKS",
    para: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
  },
];

const Blog = () => {
  return (
    <div>
      <div className="ind-info-heading-bg mt-4 d-flex align-items-center justify-content-center">
        <h1 className="page-heading text-center py-3 text-uppercase">
          Industrial Info
        </h1>
      </div>
      <Container>
        <Row>
          {infoData.map((item, index) => {
            return (
              <Col key={index} className="my-4" xs="12" lg="6">
                <Fade
                  timeout={500}
                  right={index & 1 ? true : false}
                  left={index & 1 ? false : true}
                >
                  <InfoCardL
                    para={item.para}
                    title={item.title}
                    src={item.src}
                    id={index}
                  />
                </Fade>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

const Blogs = (props) => {
  return (
    <Router>
      <Route exact path="/resources/ind-info" component={Blog} />
      <Route
        path={`/resources/ind-info/:eventId`}
        component={(props) => (
          <InfoPage infoData={infoData[parseInt(props.match.params.eventId)]} />
        )}
      />
    </Router>
  );
};

export default Blogs;
