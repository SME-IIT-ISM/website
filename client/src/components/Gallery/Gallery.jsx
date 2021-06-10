import React from "react";
import "./gallery.css";
import GHImage1 from "./BackgroundGalleryA.jpg";
import GHImage2 from "./BackgroundGalleryB.jpg";
import GHImage3 from "./BackgroundGalleryC.jpg";
import GHImage4 from "./BackgroundGalleryD.jpg";
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
      <div className="GH-image">
     
        <Card className="GH-card">
          <CardImg top width="100%" src={GHImage1} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Indian Mining Day Celebration</CardTitle>
          </CardBody>
        </Card>
<div className="row GH-card-All">
<div className="col-sm">
        <Card className="GH-card-compo1">
          <CardImg top width="100%" src={GHImage2} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Indian Mining Day Celebration</CardTitle>
          </CardBody>
        </Card>
        </div>
        <div className="col-sm">
        <Card className="GH-card-compo2">
          <CardImg top width="100%" src={GHImage3} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Diwali</CardTitle>
          </CardBody>
        </Card>
        </div>
        <div className="col-sm">
        <Card className="GH-card-compo3">
          <CardImg top width="100%" src={GHImage4} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Alumni Meet</CardTitle>
          </CardBody>
        </Card>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Gallery;
