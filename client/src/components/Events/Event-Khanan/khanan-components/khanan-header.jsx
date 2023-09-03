import React from "react";
import Klogo from "../khanan-img/Khanan'22-logo.png";
import "../khanan.css";
import Countdown from "../../../Home/Countdown";
const KhananHeader = () => {
  return (
    < div className="khanan-header" id="home">
      <img src={Klogo} alt="Khanan logo" />
      <a
        className="bt custom-button-khanan"
        href="https://docs.google.com/forms/d/e/1FAIpQLScGSZFXY8t-Pq9J7vMhrT0H_knIwPkW2AzCjYWQ_keKXJHU6A/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        REGISTER
      </a>
      <div className="k-count">
        {/* <Countdown/> */}
        </div>
    </div>
  );
};

export default KhananHeader;
