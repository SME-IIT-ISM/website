import React from "react";
import IndInfo from "./IndInfo/IndInfo";
import AnnualCalender from "./Calender/AnnualCalender";
import { Redirect } from "react-router-dom";

const routes = [
  {
    id: "ind-info",
    comp: IndInfo,
  },
  {
    id: "calender",
    comp: AnnualCalender,
  },
];

const Resources = ({ match }) => {
  const Resource = routes.find((route) => {
    return route.id === match.params.id;
  });

  if (Resource === undefined)
    return <Redirect to={`/resources/${routes[0].id}`} />;

  const ResourceComp = Resource.comp;
  return <ResourceComp />;
};

export default Resources;
