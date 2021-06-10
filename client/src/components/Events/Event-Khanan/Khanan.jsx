import React, { Component } from "react";
import KhananHeader from "./khanan-components/khanan-header";
import KhananSlider from "./khanan-components/Kslider";
import Knav from "./khanan-components/knav/Khanan-nav";
import KhananContent from "./khanan-components/Khanan-content";
import Kevent from "./khanan-components/k-events/KhananEvent";
import Campus from "./khanan-components/CampusAmd";
import Speakers from "./khanan-components/Kspeakers";
import Particles from "./Particles";

import "./khanan.css";

class EventKhanan extends Component {
  componentDidMount() {
    document.querySelector("html").style.paddingTop = "0";
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
      <div style={{ backgroundColor: "black" }}>
        <div className="particles-container">
          <Particles />
        </div>
        <div className="khanan-main-content">
          <Knav />
          <KhananHeader />
          <KhananContent />
          <Kevent />
          <Campus />
          <Speakers />
          <KhananSlider />
        </div>
      </div>
    );
  }
}

export default EventKhanan;
