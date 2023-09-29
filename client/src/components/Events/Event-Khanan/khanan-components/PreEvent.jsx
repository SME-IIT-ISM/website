import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Image1 from "./k-pre-events/alive.png";
// import Image2 from "./k-pre-events/film_making_comp.png";
import Image3 from "./k-pre-events/jharokhe.png";
import Image4 from "./k-pre-events/kryptose.png";
import Image5 from "./k-pre-events/recourdos.jpg";

import {speakers} from "./Kspeakers.jsx";
import {events} from "./k-events/KhananEvent.jsx";



// image options

const preevents = [
  // {
  //   title: "Alive ",
  //   src: Image1,
  //   struct: [
  //     " Hello fellow ISMites! As we welcome the fresh new faces in the college, @khanan_iitism in association with Manthan: The Official Music Society of IIT (ISM) Dhanbad, is ready to kick off with its much-awaited live event, ALIVE. We invite you all to witness a harmonious evening brimming with spectacular performances, and ofc the headbangs for the rock heads XD Join us at the Penman Auditorium, Tuesday, 1st Nov at 6:30 PM",
  //   ],
  //   srclink:
  //     "https://docs.google.com/forms/d/e/1FAIpQLSdkSDTJ0BUzdy_ZC62Jou9gjP-8abGJ7jI5z7ZkU5IKW1m8KA/viewform",

  // },
  // {
  //   title: "Shot Film Making Competition",
  //   src: Image2,
  //   struct: [
  //   "",
  //   ],
  //   srclink: "https://forms.gle/dJ6aPQgPrJVjxWSr8",
  // },
  {
    title: "Jharokhe",
    src: Image3,
    struct: [
      " चाहे ठंडी हवा का प्रवाह हो या शुद्ध स्मृतियों का दर्शन, झरोखे जब भी मिलते हैं, कुछ नई बातें और एहसास लेकर आते हैं।",

"चयनिका संघ और खनन प्रस्तुत करते हैं झरोखे, एक प्रतियोगिता, जिसमें आपको अपने काव्य / कहानी / ग़ज़ल / शेर / छंद  से अपने भावनाओं के झरोखे खोलने का अवसर मिलेगा।",
 "चयनिका संघ का पूरा परिवार आप सभी को इस सभा का हिस्सा बनने और इस शाम को यादगार बनाने के लिए 27.09.23 को 7 बजे GJLT आमंत्रित करता है।",
"इस प्रतियोगिता की कुल पुरस्कार राशि ₹8000 है।,",

    ],
    srclink:
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdnyMZQhu_NzXjFxDg-kPRzYtBeax-52jwjEsanVGXtHnS56g/closedform",
    },
  {
    title: "Kryptose",
    src: Image4,
    struct: [
      "Showcase your amazing dancing skills and get a chance to win prizes worth Rs. 15K",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeiV4qVsDoZVboDiUriE19Rec_cwtq63oA0BErMUPgjDh3XtQ/viewform?fbclid=PAAab0xT-eMxXiFPsMJSJ_EbhoE5SQeaeQubpc6RWW_wO_-CHylNZ10zSTj24",
  },
  {
    title: "Recuerdos",
    src: Image5,
    struct: [
     "Rulebook: https://docs.google.com/forms/d/e/1FAIpQLSeiV4qVsDoZVboDiUriE19Rec_cwtq63oA0BErMUPgjDh3XtQ/viewform?fbclid=PAAab0xT-eMxXiFPsMJSJ_EbhoE5SQeaeQubpc6RWW_wO_-CHylNZ10zSTj24"
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdH-se4xP1uKSUVR9LvAFXZdDJvxQU2DewkXFwKAdIFAAe3cA/viewform?usp=sharing",
  },
];

const slides = preevents.map((item, index) => {
  const id = { index };
  return (
    <div className="p-events" key={index}>
      <a href={`/events/khanan/${index +events.length+ speakers.length}`} className="k-card-link">
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
