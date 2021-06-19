import React from "react";
import "./calender.css";
import Title from "../../PageTitle";

const AnnualCalender = () => {
  return (
    <div>
      <Title pageTitle="Annual Calender" />
      <div className="calender-heading-bg mt-4 d-flex align-items-center justify-content-center">
        <h1 className="page-heading text-center py-3 text-uppercase">
          Annual Calender
        </h1>
      </div>
    </div>
  );
};

export default AnnualCalender;
