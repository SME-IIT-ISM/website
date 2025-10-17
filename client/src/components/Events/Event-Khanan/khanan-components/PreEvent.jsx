import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image3 from "./Khanan-sposnors-2k24/Jharokhe.png";
import Image4 from "./Khanan-sposnors-2k24/Cult NIght.jpg";

import { speakers } from "./Kspeakers.jsx";
import { events } from "./k-events/KhananEvent.jsx";

// image options

const preevents = [
  {
    title: "Jharokhe",
    src: Image3,
    struct: [
      " चाहे ठंडी हवा का प्रवाह हो या शुद्ध स्मृतियों का दर्शन, झरोखे जब भी मिलते हैं, कुछ नई बातें और एहसास लेकर आते हैं।",

      "चयनिका संघ और खनन प्रस्तुत करते हैं झरोखे, एक प्रतियोगिता, जिसमें आपको अपने काव्य / कहानी / ग़ज़ल / शेर / छंद  से अपने भावनाओं के झरोखे खोलने का अवसर मिलेगा।",
      "चयनिका संघ का पूरा परिवार आप सभी को इस सभा का हिस्सा बनने और इस शाम को यादगार बनाने के लिए 23.10.24 को 7 बजे GJLT आमंत्रित करता है।",
      "इस प्रतियोगिता की कुल पुरस्कार राशि ₹8000 है।,",
    ],
    srclink: "#",
  },
  {
    title: "Cult Night with PunchLine",
    src: Image4,
    struct: ["Showcase your amazing dancing,comedy and poetry skills"],
    srclink:
      "#",
  },
];

const slides = preevents.map((item, index) => {
  const id = { index };
  return (
    <div className="p-events" key={index}>
      <a
        href={`/events/khanan/${index + events.length + speakers.length}`}
        className="k-card-link"
      >
        <img src={item.src} alt={item.altText} />
      </a>
    </div>
  );
});

//Owl Carousel Settings
const options = {
  items: 1,
  // nav: true,
  margin: 0,
  responsiveClass: true,
  // navText: ["<span></span>", "<span></span>"],
  //  navContainerClass: "custom-nav",
  slideBy: 1,
  dots: true,
  animateOut: "fadeOut",
  loop: true,
  autoplay: true,
  smartSpeed: 3000,
  touchDrag: true,
  mouseDrag: true,

  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

class PreEvents extends React.Component {
  render() {
    return (
      <div className="main-content mb-5 ">
        <h2 className="k-sub-heading mt-5">PRE-EVENTS</h2>
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          {slides}
        </OwlCarousel>
      </div>
    );
  }
}
export default PreEvents;
export { preevents };
