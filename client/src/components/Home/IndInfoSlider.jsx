import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { infoData } from "../Resources/IndInfo/IndInfo";

const slides = infoData.map((item, index) => {
  return (
    <div className="iis-slider-item" key={index}>
      <Card className="iss">
        <CardImg top width="100%" src={item.src} alt={item.title} />
        <CardBody>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {item.date}
          </CardSubtitle>
          <CardText>{item.desc}</CardText>
          <div className="iss-btn">
            <a className="bt bt-blue" href={`/resources/ind-info/${index}`}>
              Read More
            </a>
          </div>
        </CardBody>
      </Card>
    </div>
  );
});

//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  loop: true,
  navText: ["<span></span>", "<span></span>"],
  navContainerClass: "custom-nav",
  autoplay: true,
  autoplayHoverPause: true,
  dots: true,
  dotClass: "custom-dot",
  dotsClass: "custom-dots",
  stagePadding: 70,
  smartSpeed: 1000,
  dotsSpeed: 500,
  navSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

class IndInfoSlider extends React.Component {
  render() {
    return (
      <div className="main-content mt-5">
        <OwlCarousel className="owl-carousel" {...options}>
          {slides}
        </OwlCarousel>
      </div>
    );
  }
}
export default IndInfoSlider;
