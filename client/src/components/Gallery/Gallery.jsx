import React from "react";
import "./gallery.css";
import GHImage1 from "./BackgroundGalleryA.jpg";
import GHImage2 from "./BackgroundGalleryB.jpg";
import GHImage3 from "./BackgroundGalleryC.jpg";

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
const Gallery = () => {
  return (
    <div>
      <div className="heading">
        <h1 className="text-uppercase text-center">Gallery</h1>
      </div>
      <div className=" container GH-intro">
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
        <div className="row my-2 ">

        </div>
      </div>
    </div>
  );
};

export default Gallery;
