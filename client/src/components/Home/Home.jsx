import React, { Component } from "react";
import "./home.css";
import CarouselContainer from "./CarouselContainer";
import Intro from "./Intro";
import IndInfoSlider from "./IndInfoSlider";
import Sponser from "./Sponser";
import OverlayText from "./OverlayText";
import Youtube from "./Youtube";
import SME from "./Sme";
import Fade from "react-awesome-reveal";

class Home extends Component {
  state = { width: 800, height: 800 };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width <= 767)
      document.querySelector(".navbar").classList.remove("transparent-navbar");
    else document.querySelector(".navbar").classList.add("transparent-navbar");
  };

  componentDidMount() {
    document.title = "Home - SME IIT ISM";

    document.querySelector("html").style.paddingTop = "0";
    this.updateDimensions();
    if (window.innerWidth > 767)
      document.querySelector(".navbar").classList.add("transparent-navbar");
    else
      document.querySelector(".navbar").classList.remove("transparent-navbar");

    window.addEventListener("resize", this.updateDimensions);

    window.onscroll = function () {
      scrollFunction();
    };

    const scrollFunction = () => {
      if (this.state.width > 767 && document.documentElement.scrollTop < 20) {
        document.querySelector(".navbar").classList.add("transparent-navbar");
      } else {
        document
          .querySelector(".navbar")
          .classList.remove("transparent-navbar");
      }
    };
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="Home">
        <CarouselContainer />
        <br />
        <Fade bottom timeout={500}>
          <Intro />
        </Fade>
        <br />
        <br />
        <Fade bottom timeout={500}>
          <OverlayText />
        </Fade>
        <br />
        <br />
        <br />
        <Fade bottom timeout={500}>
          <IndInfoSlider />
        </Fade>
        <br />
        <br />
        <br />
        <Fade bottom timeout={500}>
          <Youtube />
        </Fade>
        <br />
        <br />
        <br />
        <Fade bottom timeout={500}>
          <SME />
        </Fade>
        <Fade bottom timeout={500}>
          <Sponser />
        </Fade>
      </div>
    );
  }
}

export default Home;
