import React from "react";
import "./GeneralEvents.css";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const EventCard = (props) => {
  const title = props.title;
  const head = props.head;
  const src = props.src;
  const id = props.id;
  return (
    <div>
      <Card className="ge-card ">
        <CardImg
          className="ge-image"
          top-width="100%"
          src={src}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h4" style={{ textAlign: "center" }}>
            {title}
          </CardTitle>
          <CardText>{head}</CardText>
          <div>
            <a
              className="bt bt-blue text-center"
              href={`/events/general/${id}`}
            >
              Read More
            </a>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventCard;
