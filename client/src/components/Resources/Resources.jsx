import React from "react";
import Blogs from "./Blogs/Blogs";
import AnnualCalender from "./Calender/AnnualCalender";

const routes = [
  {
    id: "blogs",
    comp: Blogs,
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
