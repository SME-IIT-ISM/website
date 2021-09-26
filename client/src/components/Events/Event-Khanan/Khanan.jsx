import React, { Component, useEffect, useState } from "react";
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
import ReactPlayer from "react-player/youtube";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

var eventData = events.concat(speakers,preevents);

const HomePage = () => {
  const [modal, setModal] = useState(true);

  useEffect(()=>{
    document.title = "Khanan - SME IIT ISM";
    if(sessionStorage.getItem('1'))
    {
      setModal(false);
    }
  },[])
  // if(data!=null)
  // {
  //   setModal(data);
  // }
  const toggle = () => {
    setModal(!modal);
     sessionStorage.setItem('1', true);
     console.log( sessionStorage.getItem('1'));
  }

  return (
    <div style={{ backgroundColor: "black" }} className="k-main">
      {modal && <Modal isOpen={modal} toggle={toggle} className="popup"  centered="true"  size="lg">
        <ModalBody>
        <ReactPlayer
              className="k-yt-player"
              url="https://youtu.be/5a69OLosWZg"
              controls={true}
              width="100%"
              height="100%"
              pip={true}
            />
        </ModalBody>
      </Modal>}
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
