import React from "react";

const EventPage = (props) => {
  if (props.eventData === undefined)
    return (
      <div>
        <h1>No such event is found</h1>
      </div>
    );

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
