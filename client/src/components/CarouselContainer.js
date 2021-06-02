import React, { useState } from "react";
import Image1 from "../image/herit.jpg";
import Image2 from "../image/herit.jpg";
import Image3 from "../image/oval.jpg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: Image1,
    altText: "Slide 1",
    caption: "WELCOME TO SME IIT (ISM) DHANBAD CHAPTER",
  },
  {
    src: Image2,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: Image3,
    altText: "Slide 2",
    caption: "",
  },
];

const CarouselContainer = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="i2" />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="mt-5 pt-4"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      pause={false}
      interval="1000"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText=""
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText=""
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselContainer;
