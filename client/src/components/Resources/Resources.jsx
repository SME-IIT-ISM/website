import React from "react";
import IndInfo from "./IndInfo/IndInfo";
import AnnualCalender from "./Calender/AnnualCalender";

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
  }).comp;

  return <Resource />;
};

export default Resources;
