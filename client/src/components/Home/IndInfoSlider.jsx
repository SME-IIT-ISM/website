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
  Button,
} from "reactstrap";
import SampleImg from "./image/blog-sample.jpg";

// blog options
const items = [
  {
    id: "1",
    src: SampleImg,
    title: "Slide 1",
    date: "09/11/2021",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: "2",
    src: SampleImg,
    title: "Slide 2",
    date: "09/11/2021",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: "3",
    src: SampleImg,
    title: "Slide 3",
    date: "09/11/2021",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const slides = items.map((item) => {
  return (
    <div className="iis-slider-item" key={item.id}>
      <Card className="iss">
        <CardImg top width="100%" src={item.src} alt={item.title} />
        <CardBody>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {item.date}
          </CardSubtitle>
          <CardText>{item.desc}</CardText>
          <Button>Read More</Button>
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
  dotsEach: true,
  dotClass: "custom-dot",
  dotsClass: "custom-dots",
  stagePadding: 70,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    767: {
      items: 3,
    },
    992: {
      items: 4,
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
