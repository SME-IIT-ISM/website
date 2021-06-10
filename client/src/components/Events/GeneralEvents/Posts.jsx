import React, { Component } from "react";
// import SMEGeneralEvents from "./SMEGeneralEvents";
import "./GeneralEvents.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
//   state = {
//       generalEvents=[
//           {id=1,source="./GeneralEventsImages/smeevent1",text="Every child is an artist. The problem is how to remain an artist once he grows up",heading="SME POSTER COMPETITION"},
//           {id=2,source="./GeneralEventsImages/smeevent2",text="IIT(ISM) Student Chapter, in collaboration with Udaan(@udaan.iitism ), the career club of IIT(ISM) Dhanbad is organizing an event on the most prestigious examination of the country for entry into the elite civil services, UPSC.",heading="UPSC Career Insight"},
//           {id=3,source="./GeneralEventsImages/smeevent3",text="Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.The internship season is imminent, but are you still struggling over its procedure, prospects and curriculum? Well, here your saviour arrives!",heading="INTERN TALKS"},
//           {id=4,source="./GeneralEventsImages/smeevent4",text="Learning is not a destination, it's a journey, and we are here to make your success journey uncomplicated and amusing.The placement season is near, and everyone will obviously be having a hundred questions eating their head.",heading="PLACEMENT TALK"},
//           {id=5,source="./GeneralEventsImages/smeevent5",text="This is a call to all those phenomenal strong girls over there, who had the courage to choose a career in an unpopular and male dominated field.",heading="WOMINE"},
//           {id=6,source="./GeneralEventsImages/smeevent6",text="Curious about the on campus placement process?! Well, here comes a stop to all your doubts and confusions.SME IIT(ISM) Student Chapter brings you an extraordinary opportunity, where you will be exposed to the real virtual placement process.",heading="VIRTUAL PLACEMENT"}
//       ]

//   };
const Posts = (props) => {
  const headingObject = props.headingObject;
  const paragraph = props.paragraph;
  const source = props.source;
  // className="ge-container"
  return (
    <div>
      <Card className="ge-card ">
        <CardImg
          className="ge-image"
          top-width="100%"
          src={source}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h4" style={{ textAlign: "center" }}>
            {headingObject}
          </CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
          <CardText>{paragraph}</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Posts;
