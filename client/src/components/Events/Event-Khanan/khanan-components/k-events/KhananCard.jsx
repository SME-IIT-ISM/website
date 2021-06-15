import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

import "../../khanan.css";

const KhananCard = (props) => {
  const img = props.img;
  const title = props.title;
  const id = props.id;
  return (
    <div>
      <a href={`/events/khanan/${id}`} className="k-card-link">
        <Card className="kcard">
          <CardImg
            className="kimage"
            top-width="100%"
            src={img}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h4" style={{ textAlign: "center" }}>
              {title}
            </CardTitle>
          </CardBody>
        </Card>
      </a>
    </div>
  );
};

export default KhananCard;
