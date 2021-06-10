import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import I1 from "../khanan-img/1.jpg";
import I2 from "../khanan-img/2.jpg";
import I3 from "../khanan-img/3.jpg";
import I4 from "../khanan-img/4.jpg";
import I5 from "../khanan-img/5.jpg";
import I6 from "../khanan-img/6.jpg";

// khanan-image options
const items = [
  {
    src: I1,
    altText: "Slide 1",
  },
  {
    src: I2,
    altText: "Slide 2",
  },
  {
    src: I3,
    altText: "Slide 3",
  },
  {
    src: I4,
    altText: "Slide 4",
  },
  {
    src: I5,
    altText: "Slide 4",
  },
  {
    src: I6,
    altText: "Slide 6",
  },
];

const Kslider = items.map((item) => {
  return (
    <div>
      <img src={item.src} alt={item.altText} />
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

class KhananSlider extends React.Component {
  render() {
    return (
      <div className="main-content mt-5">
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          {Kslider}
        </OwlCarousel>
      </div>
    );
  }
}
export default KhananSlider;
