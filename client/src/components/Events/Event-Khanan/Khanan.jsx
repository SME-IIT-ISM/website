import React, { Component, useEffect } from "react";
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
import { events } from "./khanan-components/k-events/KhananEvent";
import { speakers } from "./khanan-components/Kspeakers";
import PreEvents, { preevents } from "./khanan-components/PreEvent";
import KSponser from "./khanan-components/KSponser";


var eventData = events.concat(speakers,preevents);

const HomePage = () => {
  useEffect(() => {
    document.title = "Khanan - SME IIT ISM";
  }, []);
  return (
    <div style={{ backgroundColor: "black" }} className="k-main">
      <Particles />
      <Knav />
      <KhananHeader />
      <WaveAnim />
      <Zoom timeout={600}>
        <KhananContent />
      </Zoom>
      <PreEvents/>
      <Kevent />
      <Zoom timeout={600}>
        <Campus />
      </Zoom>
      <Speakers />
      <KhananSlider />
      <KSponser/>
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
    );
  }
}

export default EventKhanan;
