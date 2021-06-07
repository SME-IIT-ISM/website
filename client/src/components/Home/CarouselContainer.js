import React from "react";
//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image1 from "./image/herit.jpg";
import Image2 from "./image/herit.jpg";
import Image3 from "./image/oval.jpg";

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
    altText: "Slide 2",
  },
];

const slides = items.map((item) => {
  return (
    <div class="item">
      <img src={item.src} alt={item.altText} />
    </div>
  );
});

//Owl Carousel Settings
const options = {
  responsiveClass: true,
  nav: false,
  loop: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
  },
};

class CarouselContainer extends React.Component {
  render() {
    return (
      <div>
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          {slides}
        </OwlCarousel>
        <div class="carousel-content text-uppercase text-center">
          <p>WELCOME TO</p>
          <p>SME IIT (ISM) DHANBAD STUDENT CHAPTER</p>
        </div>
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
export default CarouselContainer;
