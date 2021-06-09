import React from "react";
import "./home.css";
import CarouselContainer from "./CarouselContainer";
import Intro from "./Intro";
import IndInfoSlider from "./IndInfoSlider";
import Sponser from "./Sponser";
import OverlayText from "./OverlayText";
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
      <IndInfoSlider />
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
