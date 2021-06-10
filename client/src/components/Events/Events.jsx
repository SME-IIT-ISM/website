import React from "react";
import Khanan from "./Event-Khanan/Khanan";
import GeneralEvents from "./GeneralEvents/SMEGeneralEvents";

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
  }).comp;

  return <Event />;
};

export default Events;
