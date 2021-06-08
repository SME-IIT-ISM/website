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
    src: SampleImg,
    title: "Slide 1",
    date: "09/11/2021",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    src: SampleImg,
    title: "Slide 2",
    date: "09/11/2021",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    src: SampleImg,
    title: "Slide 2",
    date: "09/11/2021",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const slides = items.map((item) => {
  return (
    <div class="iis-slider-item">
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
  navText: ["Prev", "Next"],
  autoplay: true,
  smartSpeed: 3000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};

class IndInfoSlider extends React.Component {
  render() {
    return (
      <div>
        <OwlCarousel className="owl-carousel mt-5" {...options}>
          {slides}
        </OwlCarousel>
      </div>
    );
  }
}
export default IndInfoSlider;
