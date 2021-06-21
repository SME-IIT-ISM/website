import React from "react";
import "./indInfo.css";
import { Container, Row, Col } from "reactstrap";
import InfoCardL from "./IndinfoCard";
import Info from "./indimg/Info.jpg";
import Info1 from "./indimg/Info1.jpg";
import Info2 from "./indimg/Info2.jpg";
import Info3 from "./indimg/Info3.jpg";
import Info4 from "./indimg/Info4.jpg";
import Info5 from "./indimg/Info5.jpg";
import Info6 from "./indimg/Info6.jpg";
import Info7 from "./indimg/Info7.jpg";
import Info8 from "./indimg/Info8.jpg";
import Info9 from "./indimg/Info9.jpg";
import Info10 from "./indimg/Info10.jpg";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InfoPage from "./IndinfoPage";
import Title from "../../PageTitle";

const infoData = [
  {
    src: Info,
    title: "Poster Competition",
    para: "A virtual “WOMINE” event was organized on 10 April 2020 by SME IIT(ISM) Student Chapter for all the budding female engineers, who look up to a career in the mining field. The event witnessed the huge participation of girls from different institutions all over India. As event speakers, we invited some phenomenal women with extensive knowledge and years of experience in the Mining and Mineral Industry.",
    class: "latest",
  },
  {
    src: Info1,
    title: "Intern Talks",
    para: "SME IIT(ISM) DHANBAD is going to organize an INTERN TALK session on 16th May. Seniors nailing their internship season with commendable achievements, will share their experiences and resolve all your doubts.",
    class: "old",
  },
  {
    src: Info2,
    title: "Placement Talks",
    para: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    class: "old",
  },
  {
    src: Info3,
    title: "Placement Talks",
    para: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    class: "old",
  },
  {
    src: Info4,
    title: "Placement Talks",
    para: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    class: "old",
  },
  {
    src: Info5,
    title: "Placement Talks",
    para: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    class: "old",
  },
  {
    src: Info6,
    title: "Placement Talks",
    para: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    class: "old",
  },
  {
    src: Info7,
    title: "Placement Talks",
    para: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    class: "old",
  },
  {
    src: Info8,
    title: "Placement Talks",
    para: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    class: "old",
  },
  {
    src: Info9,
    title: "Placement Talks",
    para: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    class: "old",
  },
  {
    src: Info10,
    title: "Placement Talks",
    para: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    class: "old",
  },
];

const Blog = () => {
  return (
    <div>
      <Title pageTitle="Industrial Info" />
      <div className="ind-info-heading-bg mt-4 d-flex align-items-center justify-content-center">
        <h1 className="page-heading text-center py-3 text-uppercase">
          Industrial Info
        </h1>
      </div>
      <Container>
        <Row>
          <div className="info-section">
            {infoData.map((item, index) => {
              return (
                <Container key={index}>
                  <Row>
                    <Col key={index}>
                      <Fade
                        timeout={500}
                        right={index & 1 ? true : false}
                        left={index & 1 ? false : true}
                      >
                        <div>
                          <InfoCardL
                            // para={item.para}
                            title={item.title}
                            para={item.para}
                            src={item.src}
                            id={index}
                            cls={item.class}
                          />
                        </div>
                      </Fade>
                    </Col>
                  </Row>
                </Container>
              );
            })}
          </div>
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
export { infoData };
