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
import Img1 from "./khanan-img/1.jpg";
import Img2 from "./khanan-img/2.jpg";
import Particles from "./Particles";
import Zoom from "react-reveal/Zoom";
import "./khanan.css";

const eventData = [
  {
    src: Img1,
    title: "Poster Competion",
    para: "A virtual “WOMINE” event was organized on 10 April 2020 by SME IIT(ISM) Student Chapter for all the budding female engineers, who look up to a career in the mining field. The event witnessed the huge participation of girls from different institutions all over India. As event speakers, we invited some phenomenal women with extensive knowledge and years of experience in the Mining and Mineral Industry.",
  },
  {
    src: Img2,
    title: "UPSC Career Insight",
    para: "SME IIT(ISM) Student Chapter, in collaboration with Udaan(@udaan.iitism ), the career club of IIT(ISM) Dhanbad is organizing an event on the most prestigious examination of the country for entry into the elite civil services, UPSC. The guest speaker for the event is Mr. Jay Shivani (@jayshivani ) - IAS of batch 2019, AIR-81 in UPSC CSE 2018, currently posted as Assistant Commissioner at Dibrugarh, Assam.",
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
      if (this.state.width > 767 && document.documentElement.scrollTop < 200) {
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
