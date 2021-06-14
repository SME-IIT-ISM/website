import React, { Component } from "react";
import KhananHeader from "./khanan-components/khanan-header";
import KhananSlider from "./khanan-components/Kslider";
import Knav from "./khanan-components/knav/Khanan-nav";
import KhananContent from "./khanan-components/Khanan-content";
import Kevent from "./khanan-components/k-events/KhananEvent";
import Campus from "./khanan-components/CampusAmd";
import Speakers from "./khanan-components/Kspeakers";
import WaveAnim from "./khanan-components/WaveAnim";
import EventPage from "./EventPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Particles from "./Particles";
import Zoom from "react-reveal/Zoom";
import "./khanan.css";
import K1 from "./khanan-components/k-events/k-event-images/datagenix.jpg";
import K2 from "./khanan-components/k-events/k-event-images/gamicon.jpg";
import K3 from "./khanan-components/k-events/k-event-images/ideate.jpg";
import K4 from "./khanan-components/k-events/k-event-images/khanan mafia.jpg";
import K5 from "./khanan-components/k-events/k-event-images/minnovare.jpg";
import K6 from "./khanan-components/k-events/k-event-images/nirvana.jpg";
import K7 from "./khanan-components/k-events/k-event-images/placement fever.jpg";
import K8 from "./khanan-components/k-events/k-event-images/quizzine.jpg";
import K9 from "./khanan-components/k-events/k-event-images/workshop.jpg";

const eventData = [
  {
    title: "datagenix",
    src: K1,
  },
  {
    title: "gamicon",
    src: K2,
  },
  {
    title: "ideate",
    src: K3,
  },
  {
    title: "khanan-mafia",
    src: K4,
  },
  {
    title: "minnovare",
    src: K5,
  },
  {
    title: "nirvana",
    src: K6,
  },
  {
    title: "placement fever",
    src: K7,
  },
  {
    title: "quizzine",
    src: K8,
  },
  {
    title: "workshop ",
    src: K9,
  },
];

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Particles />
      <Knav />
      <KhananHeader />
      <WaveAnim />
      <Zoom timeout={600}>
        <KhananContent />
      </Zoom>
      <Kevent />
      <Zoom timeout={600}>
        <Campus />
      </Zoom>
      <Speakers />
      <KhananSlider />
    </div>
  );
};

class EventKhanan extends Component {
  state = { width: 800, height: 800 };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width <= 767) {
      document.querySelector(".navbar").classList.add("solid-navbar");
      document.querySelector(".navbar").classList.remove("transparent-navbar");
    } else {
      document.querySelector(".navbar").classList.remove("solid-navbar");
      document.querySelector(".navbar").classList.add("transparent-navbar");
    }
  };

  componentDidMount() {
    document.querySelector("html").style.paddingTop = "0";
    document.querySelector(".navbar").classList.add("khanan-event-navbar");
    document.querySelector(".footer").classList.add("khanan-event-footer");

    this.updateDimensions();
    if (window.innerWidth > 767) {
      document.querySelector(".navbar").classList.remove("solid-navbar");
      document.querySelector(".navbar").classList.add("transparent-navbar");
    } else {
      document.querySelector(".navbar").classList.add("solid-navbar");
      document.querySelector(".navbar").classList.remove("transparent-navbar");
    }

    window.addEventListener("resize", this.updateDimensions);

    window.onscroll = function () {
      scrollFunction();
    };

    const scrollFunction = () => {
      if (this.state.width > 767 && document.documentElement.scrollTop < 150) {
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
      <div className="khanan-website">
        <Router>
          <Route exact path="/events/khanan" component={HomePage} />
          <Route
            path={`/events/khanan/:eventId`}
            component={(props) => (
              <EventPage
                eventData={eventData[parseInt(props.match.params.eventId)]}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default EventKhanan;
