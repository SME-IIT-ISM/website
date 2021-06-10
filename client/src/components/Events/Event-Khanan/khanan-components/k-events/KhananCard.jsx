import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

import "../../khanan.css";

const KhananCard = (props) => {
  const img = props.img;
  const title = props.title;

  return (
    <div>
      <Card className="kcard ">
        <CardImg
          className="kimage"
          top-width="100%"
          src={img}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h4" style={{ textAlign: "center" }}>
            <a> {title} </a>
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default KhananCard;
