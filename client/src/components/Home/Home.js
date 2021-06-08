import React from "react";
import CarouselContainer from "./CarouselContainer";
import Intro from "./Intro";
import Sponser from "./Sponser";
import OverlayText from "./OverlayText.js";
import Youtube from "./Youtube";
import SME from "./Sme";

const Home = () => {
  return (
    <div className="Home">
      <CarouselContainer />
      <br />
      <Intro />
      <br />
      <br />
      <OverlayText />
      <br />
      <br />
      <br />
      <Youtube />
      <br />
      <br />
      <br />
      <SME />
      <Sponser />
    </div>
  );
};

export default Home;
