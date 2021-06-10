import React, { Component } from "react";
import "./home.css";
import CarouselContainer from "./CarouselContainer";
import Intro from "./Intro";
import IndInfoSlider from "./IndInfoSlider";
import Sponser from "./Sponser";
import OverlayText from "./OverlayText";
import Youtube from "./Youtube";
import SME from "./Sme";

class Home extends Component {
  componentDidMount() {
    document.querySelector(".navbar").classList.add("transparent-navbar");

    window.onscroll = function () {
      scrollFunction();
    };

    const scrollFunction = () => {
      if (document.documentElement.scrollTop < 20) {
        document.querySelector(".navbar").classList.add("transparent-navbar");
      } else {
        document
          .querySelector(".navbar")
          .classList.remove("transparent-navbar");
      }
    };
  }

  render() {
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
  }
}

export default Home;
