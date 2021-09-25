import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image1 from "./k-pre-events/p1.jpeg";
import Image2 from "./k-pre-events/p2.jpeg";
import Image3 from "./k-pre-events/p3.jpeg";
import Image4 from "./k-pre-events/p4.png";

// image options
const preevents = [
  {
    title: "Jharokhe",
    src: Image1,
    struct:
    [
      "Holla young poets",
      "Hope you are doing well !",
      "We have come up with an amazing opportunity that would definitely add to your poetry creation. ",
      "Chayanika Sangh presents Jharokhe- a poetry-recitation competition in association with Khanan'21 The Annual Geo Mining Fest ",
      "In order to participate in it, you will have to send a video reciting of your self composed poem. The duration of video will be ranging from 1-2 minutes. The total prize pool of this competition is ₹8000. All the entries will be posted through the instagram handle of Chayanika sangh ",
      "To participate fill the following form : https://forms.gle/RCsyQaiVbBbvALpG8",

    ],
  },
  {
    title: "Chess-O-Mania",
    src: Image2,
    struct: 
    [
      "That's what Chess is all about. One day you give your opponent a lesson, the next day, he gives you one.",
      "Hola Amigos!!",
      "IIT-ISM Dhanbad Chess Club presents “Chess-O-Mania”, 5 days Chess Tournament in association with Khanan’21 The Annual Geo Mining Fest.",
      " FREE Entry ",
      "So, what are you waiting for? Register now and unleash the inner chess master inside you!! The total prize pool for this tournament is Rs.5000/-.",
      "After registration, you will be added to the official WhatsApp group and the tournament link will be shared there only.",
      "For registration, click here : https://forms.gle/dJ6aPQgPrJVjxWSr8",
      "For more details, refer to this : https://docs.google.com/document/d/1qk6ON3bs0OKyUXv11jJ11dkiWmvUb2XNx1Jcdv723-0/edit?usp=sharing",
      "Last date to register : 27 Sep’ 21",
      "Note: To be eligible for prizes, you need to be registered through the given link."
    ],
    },
  {
    title: "RECUERDOS",
    src: Image3,
    struct: 
    [
      "A picture is worth a thousand words. Every photograph has some memories and emotions attached to it and is far more expressive than many words put together. We all went through some very tough times recently and the home quarantine had put a temporary pause to our lives. However, amidst this monotony, we got an opportunity to spend some quality time with our friends and family. We got to live and cherish some beautiful moments in our life which otherwise, might not have been possible.",
       "Khanan ’21 is delighted to bring for you all an online  photography competition,  RECUERDOS that will provide you an opportunity to flex your photography skills. The theme for the competition is  QUARANTINE MEMORIES  wherein everyone would get a chance to share their beautiful memories captured during quarantine with us.",
       "IMPORTANT INSTRUCTIONS: The contest starts from 18th of September and will end by 5th of October. To participate and submit your entry for the contest, just fill a google form. The link for the same has been provided here. Your entries will be posted on the official Facebook page of Khanan, IIT ISM. Winning certificates and prize money will be awarded to the top three winners of the competition.",
       " Link for entry submission: https://forms.gle/JJ3kQkvrYeVguvgw8",
       " For further insight into the competition and to know more about rules and judging criteria, refer to the Rulebook of Khanan ’21. ",
       " Link for rulebook:  https://drive.google.com/drive/folders/1dYfk7AD6E3hMBWkRQfamDVI2tNtIlnXy?usp=sharing",
       "Still waiting?? Bring out the photographer inside you and add some creative spice to your life by registering for the contest!!!",

    ],
  },
  {
    title: "panDANCEmic2.0",
    src: Image4,
    struct:
    [
      "something",
    ],
  },
];

const slides = preevents.map((item, index) => {
  const id = {index};
  return (
    <div className="p-events" key={index}>
        <a href={`/events/khanan/${index+13}`} className="k-card-link">
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
      items: 4,
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