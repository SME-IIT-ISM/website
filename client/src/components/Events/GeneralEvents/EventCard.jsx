import React from "react";
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
//           {id=1,src="./GeneralEventsImages/smeevent1",text="Every child is an artist. The problem is how to remain an artist once he grows up",heading="SME PostCard COMPETITION"},
//           {id=2,src="./GeneralEventsImages/smeevent2",text="IIT(ISM) Student Chapter, in collaboration with Udaan(@udaan.iitism ), the career club of IIT(ISM) Dhanbad is organizing an event on the most prestigious examination of the country for entry into the elite civil services, UPSC.",heading="UPSC Career Insight"},
//           {id=3,src="./GeneralEventsImages/smeevent3",text="Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.The internship season is imminent, but are you still struggling over its procedure, prospects and curriculum? Well, here your saviour arrives!",heading="INTERN TALKS"},
//           {id=4,src="./GeneralEventsImages/smeevent4",text="Learning is not a destination, it's a journey, and we are here to make your success journey uncomplicated and amusing.The placement season is near, and everyone will obviously be having a hundred questions eating their head.",heading="PLACEMENT TALK"},
//           {id=5,src="./GeneralEventsImages/smeevent5",text="This is a call to all those phenomenal strong girls over there, who had the courage to choose a career in an unpopular and male dominated field.",heading="WOMINE"},
//           {id=6,src="./GeneralEventsImages/smeevent6",text="Curious about the on campus placement process?! Well, here comes a stop to all your doubts and confusions.SME IIT(ISM) Student Chapter brings you an extraordinary opportunity, where you will be exposed to the real virtual placement process.",heading="VIRTUAL PLACEMENT"}
//       ]

//   };
const EventCard = (props) => {
  const title = props.title;
  const paragraph = props.paragraph;
  const src = props.src;
  const id = props.id;
  // className="ge-container"
  // const reference = "sme/event/"+props.title;
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
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
          <CardText>{paragraph}</CardText>
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
