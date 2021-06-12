import React from "react";
import Khanan from "./Event-Khanan/Khanan";
import GeneralEvents from "./GeneralEvents/SMEGeneralEvents";
import { Redirect } from "react-router-dom";

const routes = [
  {
    id: "khanan",
    comp: Khanan,
  },
  {
    id: "general",
    comp: GeneralEvents,
  },
];

const Events = ({ match }) => {
  const Event = routes.find((route) => {
    return route.id === match.params.id;
  });

  if (Event === undefined) return <Redirect to={`/events/${routes[0].id}`} />;

  const EventComp = Event.comp;
  return <EventComp path={match} />;
};

export default Events;
