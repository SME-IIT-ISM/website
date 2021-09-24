import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image1 from "./k-pre-events/p1.jpeg";
import Image2 from "./k-pre-events/p2.jpeg";
import Image3 from "./k-pre-events/p3.jpeg";
import Image4 from "./k-pre-events/p1.jpeg";

// image options
const items = [
  {
    src: Image1,
    altText: "pe1",
  },
  {
    src: Image2,
    altText: "pe2",
  },
  {
    src: Image3,
    altText: "pe3",
  },
  {
    src: Image4,
    altText: "pe4",
  },
];

const slides = items.map((item, index) => {
  return (
    <div className="p-events" key={index}>
        <a href="">
      <img src={item.src} alt={item.altText} />
      </a>
    </div>
  );
});

//Owl Carousel Settings
const options = {
  items: 1,
  nav: true,
  margin: 0,
  responsiveClass: true,
  navText: ["<span></span>", "<span></span>"],
   navContainerClass: "custom-nav",
  slideBy: 1,
  dots: true,
  animateOut: "fadeOut",
  loop: true,
  autoplay: true,
  smartSpeed: 3000,
  touchDrag: true,
  mouseDrag: false,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
};

class PreEvents extends React.Component {
  render() {
    return (
      <div className="main-content">
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          {slides}
        </OwlCarousel>
      </div>
    );
  }
}
export default PreEvents;
