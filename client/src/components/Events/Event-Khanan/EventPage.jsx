import React from "react";
import Error404 from "../../Error404/Error404";

const EventPage = (props) => {
  if (props.eventData === undefined) return <Error404 msg="Unexisting Event" />;

  //   const src = props.eventData.src;
  const title = props.eventData.title;
  const para = props.eventData.para;

  return (
    <div>
      <h1>{title}</h1>
      <p>{para}</p>
    </div>
  );
};

export default EventPage;
