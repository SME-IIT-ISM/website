import React from "react";
import { Container, Row, Col } from "reactstrap";
import KhananCard from "./k-events/KhananCard";
import S1 from "../khanan-img/vaibhav.PNG";
import S2 from "../khanan-img/jayank.jpeg";
import S3 from "../khanan-img/sukumar.png";
import S4 from "../khanan-img/abani.jpeg";
import S5 from "../khanan-img/amit.PNG";
import { events } from "./k-events/KhananEvent";
import Zoom from "react-reveal/Zoom";

const speakers = [
  {
    title: "Dr Vaibhav Raj",
    src: S1,
    head: "Head Content",
    struct: ["Vaibhav Raj is working as Associate Service Fellow at National Institute for Occupational Safety and Health (NIOSH) USA. He has been with NIOSH for over 5 years working on occupational safety and health issues pertinent to the mining industry. He received his Ph.D. from the University of Alaska Fairbanks (UAF), the USA in 2015. His Ph.D. work was focused on computational fluid dynamics (CFD) modeling of an open pit under air inversion.", "Topic: AN OVERVIEW OF NIOSH MINING HEALTH AND SAFETY RESEARCH"],
  },
  {
    title: "Mr JAYANK SRIVASTAVA",
    src: S2,
    head: "Head Content",
    struct: ["Jayank is a Stanford University post graduate in Environmental Engineering and an IIT-BHU graduate in Mining Engineering. Currently works with Google in New York City, USA. Jayank has had 12+ years of consulting, digital commerce (B2C and B2B) and entrepreneurial experience across Asia and the US. Jayank has worked across various startups like Flipkart.com in India to Souq.com in Dubai, and had his own online education management startup in the US", "Topic: CAREER PIVOTS"],
  },
  {
    title: "DR. SUKUMAR BANDOPADHYAY",
    src: S3,
    head: "Head Content",
    struct: ["Dr. Sukumar Bandopadhyay is currently the Director of Mining Analytics, International (MAI), a consulting (LLC) firm with expertise in Big Data, Data Analytics, and Artificial Intelligence. Prior to starting his own consulting services he served as a Professor of Mining Engineering for more than three decades at the University of Alaska Fairbanks. He has also served for several years as the Dean of the School of Mineral Engineering, Head of the Mining and Geological Department, Director of the Mineral Industry Research Laboratory, and Director of the Petroleum Development Laboratory at the University of Alaska Fairbanks."],
  },
  {
    title: "MR. ABANI R SAMAL",
    src: S4,
    head: "Head Content",
    struct: ["Mr. Abani is an alumnus of IIT(ISM) Dhanbad and is an expert in the field of Economic Geology and Geostatistics. He is the owner of GeoGlobal LLC, that lends its advisory services to mining industries all over the world, and he has taught Mineral Deposit Evaluation as a professor in the University of Utah. His claim to fame comes from his overall astounding knowledge in Advanced Geostatistical Analysis and Mineral Resource Evaluation.", "Topic: MAKING INDIAN MINERAL INDUSTRY COMPETITIVE"],
  },
  {
    title: "MR. AMIT KUMAR",
    src: S5,
    head: "Head Content",
    struct: ["Mr. Amit Kumar is currently General Manager of Mine Planning in Thyssenkrupp Industries India Pvt. Ltd.. He has also worked Worked as a Mine Planning Manager in MECON Limited and As a Manager, Mining in Tata Steel, Raw Material Division.He is also certified as a First Class Mine Manager's Certificate of compentency in Coal by Directorate General of Mines Safety, Govt. Of India", "Topic: CONCEPTUAL PLANNING AND MINE DEVELOPMENT"],
  },
];

const Speakers = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="k-sub-heading">MEET OUR SPEAKERS</h2>
        </Col>
      </Row>
      <Row>
        {speakers.map((item, index) => {
          return (
            <Col xs="12" sm="6" lg="3">
              <Zoom timeout={600}>
                <KhananCard
                  title={item.title}
                  img={item.src}
                  id={index + events.length}
                />
              </Zoom>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Speakers;
export { speakers };
