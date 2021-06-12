import React from "react";
import "./gallery.css";
import {
  Card,
  CardImg,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import GHImage1 from "./BackgroundGalleryA.jpg";
import GHImage2 from "./BackgroundGalleryB.jpg";
import GHImage3 from "./BackgroundGalleryC.jpg";
import ALUMNIMEET1 from "./ALUMNIMEET/ALUMNIMEET1.jpg";
import ALUMNIMEET2 from "./ALUMNIMEET/ALUMNIMEET2.jpg";
import ALUMNIMEET3 from "./ALUMNIMEET/ALUMNIMEET3.jpg";
import ALUMNIMEET4 from "./ALUMNIMEET/ALUMNIMEET4.jpg";
import ALUMNIMEET5 from "./ALUMNIMEET/ALUMNIMEET5.jpg";
import ALUMNIMEET6 from "./ALUMNIMEET/ALUMNIMEET6.jpg";
import AwardsAndAppreciation1 from "./AwardsAndAppreciation/AwardsAndAppreciation1.jpg";
import AwardsAndAppreciation2 from "./AwardsAndAppreciation/AwardsAndAppreciation2.jpg";
import AwardsAndAppreciation3 from "./AwardsAndAppreciation/AwardsAndAppreciation3.jpg";
import AwardsAndAppreciation4 from "./AwardsAndAppreciation/AwardsAndAppreciation4.jpg";
import DiwaliCelebration1 from "./DiwaliCelebration/DiwaliCelebration1.jpg";
import DiwaliCelebration2 from "./DiwaliCelebration/DiwaliCelebration2.jpg";
import DiwaliCelebration3 from "./DiwaliCelebration/DiwaliCelebration3.jpg";
import EssayCompetition1 from "./EssayCompetition/EssayCompetition1.jpg";
import EssayCompetition2 from "./EssayCompetition/EssayCompetition2.jpg";
import EssayCompetition3 from "./EssayCompetition/EssayCompetition3.jpg";
import EssayCompetition4 from "./EssayCompetition/EssayCompetition4.jpg";
import KHANAN181 from "./KHANAN18/KHANAN181.jpg";
import KHANAN182 from "./KHANAN18/KHANAN182.jpg";
import KHANAN183 from "./KHANAN18/KHANAN183.jpg";
import KHANAN184 from "./KHANAN18/KHANAN184.jpg";
import KHANAN185 from "./KHANAN18/KHANAN185.jpg";
import KHANAN186 from "./KHANAN18/KHANAN186.jpg";
import KHANAN187 from "./KHANAN18/KHANAN187.jpg";
import KHANAN188 from "./KHANAN18/KHANAN188.jpg";
import KHANAN189 from "./KHANAN18/KHANAN189.jpg";
import KHANAN1810 from "./KHANAN18/KHANAN1810.jpg";
import KHANAN1811 from "./KHANAN18/KHANAN1811.jpg";
import Kryptos1 from "./Kryptos/Kryptos1.jpg";
import KHANAN191 from "./KHANAN19/KHANAN191.jpg";
import KHANAN192 from "./KHANAN19/KHANAN192.jpg";
import KHANAN193 from "./KHANAN19/KHANAN193.jpg";
import MiningDay191 from "./MiningDay19/MiningDay191.jpg";
import MiningDay192 from "./MiningDay19/MiningDay192.jpg";
import MiningDay193 from "./MiningDay19/MiningDay193.jpg";
import MiningDay194 from "./MiningDay19/MiningDay194.jpg";
import MiningDay195 from "./MiningDay19/MiningDay195.jpg";
import MiningDay196 from "./MiningDay19/MiningDay196.jpg";
import Minnovare1 from "./Minnovare/Minnovare1.jpg";
import Minnovare2 from "./Minnovare/Minnovare2.jpg";
import Minnovare3 from "./Minnovare/Minnovare3.jpg";
import QuizCompetition1 from "./QuizCompetition/QuizCompetition1.jpg";
import QuizCompetition2 from "./QuizCompetition/QuizCompetition2.jpg";
import QuizCompetition3 from "./QuizCompetition/QuizCompetition3.jpg";
import SMEInductions1 from "./SMEInductions/SMEInductions1.jpg";
import SMEInductions2 from "./SMEInductions/SMEInductions2.jpg";
import SMEInductions3 from "./SMEInductions/SMEInductions3.jpg";

const ALLPhotos = [
  {
    src: ALUMNIMEET1,
    alt: "ALUMNIMEET1",
  },
  {
    src: ALUMNIMEET2,
    alt: "ALUMNIMEET2",
  },
  {
    src: ALUMNIMEET3,
    alt: "ALUMNIMEET3",
  },
  {
    src: ALUMNIMEET4,
    alt: "ALUMNIMEET4",
  },
  {
    src: ALUMNIMEET5,
    alt: "ALUMNIMEET5",
  },
  {
    src: ALUMNIMEET6,
    alt: "ALUMNIMEET6",
  },
  {
    src: AwardsAndAppreciation1,
    alt: "AwardsAndAppreciation1",
  },
  {
    src: AwardsAndAppreciation2,
    alt: "AwardsAndAppreciation2",
  },
  {
    src: AwardsAndAppreciation3,
    alt: "AwardsAndAppreciation3",
  },
  {
    src: AwardsAndAppreciation4,
    alt: "AwardsAndAppreciation4",
  },
  {
    src: DiwaliCelebration1,
    alt: "DiwaliCelebration1",
  },
  {
    src: DiwaliCelebration2,
    alt: "DiwaliCelebration2",
  },
  {
    src: DiwaliCelebration3,
    alt: "DiwaliCelebration3",
  },
  {
    src: EssayCompetition1,
    alt: "EssayCompetition1",
  },
  {
    src: EssayCompetition2,
    alt: "EssayCompetition2",
  },
  {
    src: EssayCompetition3,
    alt: "EssayCompetition3",
  },
  {
    src: EssayCompetition4,
    alt: "EssayCompetition4",
  },
  {
    src: KHANAN181,
    alt: "KHANAN181",
  },
  {
    src: KHANAN182,
    alt: "KHANAN182",
  },
  {
    src: KHANAN183,
    alt: "KHANAN183",
  },
  {
    src: KHANAN184,
    alt: "KHANAN184",
  },
  {
    src: KHANAN185,
    alt: "KHANAN185",
  },
  {
    src: KHANAN186,
    alt: "KHANAN186",
  },
  {
    src: KHANAN187,
    alt: "KHANAN187",
  },
  {
    src: KHANAN188,
    alt: "KHANAN188",
  },
  {
    src: KHANAN189,
    alt: "KHANAN189",
  },
  {
    src: KHANAN1810,
    alt: "KHANAN1810",
  },
  {
    src: KHANAN1811,
    alt: "KHANAN1811",
  },
  {
    src: Kryptos1,
    alt: "Kryptos1",
  },
  {
    src: KHANAN191,
    alt: "KHANAN191",
  },
  {
    src: KHANAN192,
    alt: "KHANAN192",
  },
  {
    src: KHANAN193,
    alt: "KHANAN193",
  },
  {
    src: MiningDay191,
    alt: "MiningDay191",
  },
  {
    src: MiningDay192,
    alt: "MiningDay192",
  },
  {
    src: MiningDay193,
    alt: "MiningDay193",
  },
  {
    src: MiningDay194,
    alt: "MiningDay194",
  },
  {
    src: MiningDay195,
    alt: "MiningDay195",
  },
  {
    src: MiningDay196,
    alt: "MiningDay196",
  },
  {
    src: Minnovare1,
    alt: "Minnovare1",
  },
  {
    src: Minnovare2,
    alt: "Minnovare2",
  },
  {
    src: Minnovare3,
    alt: "Minnovare3",
  },
  {
    src: QuizCompetition1,
    alt: "QuizCompetition1",
  },
  {
    src: QuizCompetition2,
    alt: "QuizCompetition2",
  },
  {
    src: QuizCompetition3,
    alt: "QuizCompetition3",
  },
  {
    src: SMEInductions1,
    alt: "SMEInductions1",
  },

  {
    src: SMEInductions2,
    alt: "SMEInductions2",
  },

  {
    src: SMEInductions3,
    alt: "SMEInductions3",
  },
];

const Gallery = () => {
  return (
    <div>
      <div className="heading">
        <h1 className="text-uppercase text-center">Gallery</h1>
      </div>
      <div className="container GH-intro">
        <div className="row">
          <div className="col-sm">
            <Card className="GHImage1">
              <CardImg
                className="GH"
                top
                width="100%"
                src={GHImage1}
                alt="Card image cap"
              />
              <CardBody className=" Imagetext">
                <CardTitle tag="h5">National Mining Day</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm">
            <div className="row GHText">
              <p className="h1 text-white  GHText1">Welcome to our Memories</p>
              <p className="h4 text-white display-6 GHText2">
                Take a trip down our memory lane
              </p>
            </div>
            <div className="row GHSmall">
              <div className="col-sm">
                <Card className="GHImage2">
                  <CardImg
                    className="GH"
                    top
                    width="100%"
                    src={GHImage2}
                    alt="Card image cap"
                  />
                  <CardBody className=" Imagetext">
                    <CardTitle tag="h5">SME</CardTitle>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm">
                <Card className="GHImage3">
                  <CardImg
                    className="GH"
                    top
                    width="100%"
                    src={GHImage3}
                    alt="Card image cap"
                  />
                  <CardBody className="Imagetext">
                    <CardTitle tag="h5">Diwali</CardTitle>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row justify-content-between">
          {ALLPhotos.map((item, index) => {
            return (
              <div
                key={index}
                className="col my-2 GalleryAllContainer col-md-4 col-sm-6"
              >
                <img className="GalleryAllSize" src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
