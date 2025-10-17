import React, { useEffect } from "react";
import "./calender.css";
import calenderImg from "./calender.jpg";

const AnnualCalender = () => {
  useEffect(() => {
    document.title = "Annual Calender - SME IIT ISM";
  }, []);

  return (
    <div>
      <div className="calender-heading-bg mt-4 d-flex align-items-center justify-content-center">
        <h1 className="page-heading text-center py-3 text-uppercase">
          Annual Calendar
        </h1>
      </div>
      <div className=" calender d-flex flex-column justify-content-center align-items-center  my-5">
        <img src={calenderImg} alt="" />
        <a
          href={calenderImg}
          className="bt bt-blue mt-5"
          download="SME_annual_calender"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Annual Calender
        </a>
      </div>
    </div>
  );
};

export default AnnualCalender;
