import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image1 from "./k-pre-events/alive.png";
import Image2 from "./k-pre-events/film_making_comp.png";
import Image3 from "./k-pre-events/jharokhe.png";
import Image4 from "./k-pre-events/operation campaign poster.jpg";
import Image5 from "./k-pre-events/recuerdos.jpg";

import {speakers} from "./Kspeakers.jsx";
import {events} from "./k-events/KhananEvent.jsx";



// image options

const preevents = [
  {
    title: "Alive ",
    src: Image1,
    struct: [
      " Hello fellow ISMites! As we welcome the fresh new faces in the college, @khanan_iitism in association with Manthan: The Official Music Society of IIT (ISM) Dhanbad, is ready to kick off with its much-awaited live event, ALIVE. We invite you all to witness a harmonious evening brimming with spectacular performances, and ofc the headbangs for the rock heads XD Join us at the Penman Auditorium, Tuesday, 1st Nov at 6:30 PM",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdkSDTJ0BUzdy_ZC62Jou9gjP-8abGJ7jI5z7ZkU5IKW1m8KA/viewform",

  },
  {
    title: "Shot Film Making Competition",
    src: Image2,
    struct: [
    "",
    ],
    srclink: "https://forms.gle/dJ6aPQgPrJVjxWSr8",
  },
  {
    title: "Jharokhe",
    src: Image3,
    struct: [
      " चाहे ठंडी हवा का प्रवाह हो या शुद्ध स्मृतियों का दर्शन, झरोखे जब भी मिलते हैं, कुछ नई बातें और एहसास लेकर आते हैं।",

"चयनिका संघ और खनन प्रस्तुत करते हैं झरोखे, एक प्रतियोगिता, जिसमें आपको अपने काव्य / कहानी / ग़ज़ल / शेर / छंद  से अपने भावनाओं के झरोखे खोलने का अवसर मिलेगा।",
 "चयनिका संघ का पूरा परिवार आप सभी को इस सभा का हिस्सा बनने और इस शाम को यादगार बनाने के लिए 2.11.22 को 7 बजे OLHC आमंत्रित करता है।",
"इस प्रतियोगिता की कुल पुरस्कार राशि ₹10000 है।,",
"Rule book - shorturl.at/eFKQ9 "

    ],
    srclink:
    "https://docs.google.com/forms/d/e/1FAIpQLSeXWQekWig5C1oXk3GsAnryslCAzJqQW9PXUcLcER1O55jYAw/closedform",
    },
  {
    title: "Operation campaign",
    src: Image4,
    struct: [
      "A nation is in turmoil and is searching for it's saviour. Elections are being held on 29th of October. Get ready to unleash the leader within as you compete for the post of President of this nation. Win the confidence of its citizens (and of course, attractive prizes;) ) with your innovative manifesto and your exemplary oratory skills in this political battleground. Operation Campaign is the stage to quench your political thirst. Go ahead and register now to win Cash Prizes worth 9K!",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf6ao_Yj5L7CuTD4lzxJvJruIVL5isYvV9fchdBOcSG88ubRA/viewform",
  },
  {
    title: "Recuerdos",
    src: Image5,
    struct: [
      "RULES :",
      "Following are the rules for panDANCEmic 2.0 ",
      "panDANCEmic 2.0 is a solo dance event open to all.",
      "NO ENTRY FEES for participation.",
      "Participants can choose any song or dance form they might want to perform to.",
      "Participants must shoot the entire video in a single take; edited videos will not be entertained.",
      "Participants can send in dance videos of not more than 50 seconds from 25th September to 3rd October to be considered for judgement.",
      "Participants are requested to send entries along with the given information:",
      "Participant’s name",
      "Instagram ID",
      "Place",
      "College/ Academy name",
      "To send in entries:",
      "Attach the entry in Google form present in the Instagram bio.",
      "In case of ambiguity, send entries in document format on Whatsapp to-",
      "Tejaswini Velivela:+91 6305504270",
      "Shovit Kumar:+91 7488760269",
      "Judging criteria",
      "The entries will be judged according to the following criteria:",
      "The videos will be posted from the official Instagram and Facebook handles of LITM on a first come first serve policy.",
      "The points carried by post reactions are as follows:",
      "Instagram",
      "1 like=5 point",
      "1 share(in story)=10 points",
      "Facebook",
      "1 like/react=5 points",
      "1 share(not multiple)=10 points",
      "The final scores will be based 70% on the assessment by the Judge and 30% on the reactions on Instagram and Facebook posts.",
      "Participants must follow the Instagram and Facebook handles of LITM.",
      "The Instagram handle of LITM should be mentioned while sharing the post in an Instagram story.",
      "The names of the winners will be declared via the Facebook and Instagram handles of KHANAN.",
      "Winners will receive exciting goodies and cash worth 10k and certificates. Besides the winners, some exceptional performances will be given special goodies and a special mention through our social media handles.",
      "Contact:",
      "Tejaswini Velivela : 6305504270",
      "Shovit Kumar : 7488760269",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf6ao_Yj5L7CuTD4lzxJvJruIVL5isYvV9fchdBOcSG88ubRA/viewform",
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
