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
      "Hola Amigos ! ",
      "“Photography takes an instant out of time, altering life by holding it still.” – Dorothea Lange",
      "Khanan, the annual geomining fest of IIT ISM is here with it's pre-event to warm you up for the amazing blast we have prepared for you.",
      "The Photography contest is here, so clean your lenses and get ready to capture the emotions in your lens to keep it as a memory forever. the best photo you can!",
      "The theme for this event is Emotions. ",
      "Emotions are the beautiful gestures that make our life worth living.  Boundaries dissolve with them and yet capturing them is so simple and memorable.",
      "Read the rulebook to know more and we hope to see a lot of entries as all you need is a phone and a keen eye!",
      "RULES",
      "The photograph clicked must depict the theme of “Emotion” or else it will not be accepted. ",
      "The participants must upload the photo originally clicked by them. Downloading from the internet or WhatsApp should strictly be avoided. The photo must contain the EXIF Data. ",
      "Any kind of plagiarism will lead to direct disqualification. ",
      "You can make alterations in the hue/saturation /brightness/ vibrancy/B&W/colour theme, but no more additional edits like photo manipulation or beyond standard optimization will be entertained. ",
      " The Entries will only be accepted in .jpg/.jpeg format. ",
      "The photograph must be of the highest resolution possible. ",
      " A Google form link will be provided for submitting your entries.",
      "The contestant’s photograph will be posted on the official Instagram handle of khanan_iitism within 12 hours of the form submission. ",
      " Only one entry will be allowed per participant.",
      "A caption must be given for the photograph which acknowledges your emotions/feelings for that photograph.",
      "Judging Criteria: ",
      " Likes and comments on the Instagram page will carry 50% weightage for evaluation. ",
      "Only the top ten comments will be taken into consideration for evaluation. Note that multiple comments from the same account will be counted only once, and any vulgar or derogatory comments will not be taken into consideration.",
      "Rest of the 50% will be judged by judges based on your creativity and other technical aspects.",
      "Prize Money (For top 3 photographs):",
      "Top three winners of this competition will be awarded total prize money of 8k and a winning certificate: ",


      "Contact us: ",
      "SHASHANK HARSH : 6203102284",
      "SHAILESH YADAV : 7903515149",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdkSDTJ0BUzdy_ZC62Jou9gjP-8abGJ7jI5z7ZkU5IKW1m8KA/viewform",

  },
  {
    title: "Shot Film Making Competition",
    src: Image2,
    struct: [
      "That's what Chess is all about. One day you give your opponent a lesson, the next day, he gives you one.",
      "Hola Amigos!!",
      "IIT-ISM Dhanbad Chess Club presents “Chess-O-Mania”, 5 days Chess Tournament in association with Khanan’21 The Annual Geo Mining Fest.",
      " FREE Entry ",
      "So, what are you waiting for? Register now and unleash the inner chess master inside you!! The total prize pool for this tournament is Rs.5000/-.",
      "After registration, you will be added to the official WhatsApp group and the tournament link will be shared there only.",
      "For registration, click here : https://forms.gle/dJ6aPQgPrJVjxWSr8",
      "For more details, refer to this : https://docs.google.com/document/d/1qk6ON3bs0OKyUXv11jJ11dkiWmvUb2XNx1Jcdv723-0/edit?usp=sharing",
      "Last date to register : 27 Sep’ 21",
      "Note: To be eligible for prizes, you need to be registered through the given link.",
      "Contact:",
      "ANKAN SEN : 8348385129",
      "ANJALI KUMARI : 7992287987",
    ],
    srclink: "https://forms.gle/dJ6aPQgPrJVjxWSr8",
  },
  {
    title: "Jharokhe",
    src: Image3,
    struct: [
      "A picture is worth a thousand words. Every photograph has some memories and emotions attached to it and is far more expressive than many words put together. We all went through some very tough times recently and the home quarantine had put a temporary pause to our lives. However, amidst this monotony, we got an opportunity to spend some quality time with our friends and family. We got to live and cherish some beautiful moments in our life which otherwise, might not have been possible.",
      "Khanan ’21 is delighted to bring for you all an online  photography competition,  RECUERDOS that will provide you an opportunity to flex your photography skills. The theme for the competition is  QUARANTINE MEMORIES  wherein everyone would get a chance to share their beautiful memories captured during quarantine with us.",
      "IMPORTANT INSTRUCTIONS: The contest starts from 18th of September and will end by 5th of October. To participate and submit your entry for the contest, just fill a google form. The link for the same has been provided here. Your entries will be posted on the official Facebook page of Khanan, IIT ISM. Winning certificates and prize money will be awarded to the top three winners of the competition.",
      " Link for entry submission: https://forms.gle/JJ3kQkvrYeVguvgw8",
      " For further insight into the competition and to know more about rules and judging criteria, refer to the Rulebook of Khanan ’21. ",
      " Link for rulebook:  https://drive.google.com/drive/folders/1dYfk7AD6E3hMBWkRQfamDVI2tNtIlnXy?usp=sharing",
      "Still waiting?? Bring out the photographer inside you and add some creative spice to your life by registering for the contest!!!",
      "Contact:",
      "Keshav Lakhotia: 7340598208",
      "Amit Raj: 9472750675",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeSOx7YSb30b3xz3-UQbBtJpxBDZc9o68eUFMoXvZp98Q-PUA/viewform",
  },
  {
    title: "panDANCEmic2.0",
    src: Image4,
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
