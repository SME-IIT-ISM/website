import React from "react";
import CarouselContainer from "./CarouselContainer";
import Intro from "./Intro";
import Sponser from "./Sponser";
import OverlayText from "./OverlayText.js";

const Home = () => {
  return (
    <div className="Home">
      <CarouselContainer />
      <br />
      <br />
      <Intro />
      <br />
      <br />
      <OverlayText />
      <br />
      <br />
      <br />
      <br />
      <Sponser />
    </div>
  );
};

export default Home;
