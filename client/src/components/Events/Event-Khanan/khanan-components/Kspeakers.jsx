import React from "react";
import { Container, Row, Col } from "reactstrap";
import KhananCard from "./k-events/KhananCard";
import S1 from "../khanan-img/siddhartha_Roy.jpg";
import S2 from "../khanan-img/Sunny_Rao.jpg";
import S3 from "../khanan-img/Sagesh_Kumar.jpg";
// import S4 from "../khanan-img/abani.jpg";
// import S5 from "../khanan-img/amit.PNG";
import { events } from "./k-events/KhananEvent";


const speakers = [
  {
    title: "DR. SIDDHARTHA ROY",
    src: S1,
    head: "Head Content",
    struct: [
      "Join us for a guest lecture by Siddhartha Roy sir, deputy manager at coal India limited on 1 st October at 10 am in Management studies auditorium. This is a great opportunity to learn from one of the experts in the field and to get your questions answered. The lecture is open to all."
    ],
    srclink:
      "#",
      // zoomlink: "#",
      // con: true,
  },
  {
    title: "Mr. Sunny Rao",
    src: S2,
    head: "Head Content",
    struct: [
      "Join us for a guest lecture by SUNNY RAO the Manager (Mining), BCCL ! on 2nd October at 10 am in golden Jubilee lecture theatre This is a great opportunity to learn from one of the experts in the field and to get your questions answered. The lecture is open to all."

     
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeaqmHIY3jMNld_PbVLlcuZnTa96UFEER59Ntv7oux51sj6Uw/viewform",
      zoomlink: "https://us02web.zoom.us/j/84154830403?pwd=eGV5TGg3akdwV0J2ZVdndWVtdDRUUT09",
      con: true,

  },
  
  {
    title: "DR. SAGESH KUMAR M.R",
    src: S3,
    head: "Head Content",
    struct: [
     "Join us for a guest lecture by Dr. Sagesh kumar M.R. the Director (Mining), DGMS ! on 1 st October at 5 pm in golden Jubilee lecture theatre This is a great opportunity to learn from one of the experts in the field and to get your questions answered. The lecture is open to all."
     ],
     srclink:
      "#",
      // zoomlink: "https://us02web.zoom.us/j/84154830403?pwd=eGV5TGg3akdwV0J2ZVdndWVtdDRUUT09",
      // con: true,
  },
];

const Speakers = () => {
  return (
    <div></div>
  );
};

export default Speakers;
export { speakers };
