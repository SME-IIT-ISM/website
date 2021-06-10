import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image1 from "./image/herit1.jpg";
import Image2 from "./image/oval.jpg";
import Image3 from "./image/dept.jpg";
import Image4 from "./image/herit2.jpg";

// image options
const items = [
  {
    src: Image1,
    altText: "Slide 1",
  },
  {
    src: Image2,
    altText: "Slide 2",
  },
  {
    src: Image3,
    altText: "Slide 3",
  },
  {
    src: Image4,
    altText: "Slide 4",
  },
];

const slides = items.map((item, index) => {
  return (
    <div className="item" key={index}>
      <img src={item.src} alt={item.altText} />
    </div>
  );
});

//Owl Carousel Settings
const options = {
  items: 1,
  nav: true,
  navText: ["<span></span>", "<span></span>"],
  navContainerClass: "custom-nav",
  slideBy: 1,
  dots: true,
  animateOut: "fadeOut",
  loop: true,
  autoplay: true,
  smartSpeed: 3000,
};

class CarouselContainer extends React.Component {
  render() {
    return (
      <div className="main-content">
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          {slides}
        </OwlCarousel>
        <div className="carousel-content text-uppercase text-center px-auto">
          <p>
            WELCOME TO <br /> SME IIT (ISM) DHANBAD <br /> STUDENT CHAPTER
          </p>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
export default CarouselContainer;
