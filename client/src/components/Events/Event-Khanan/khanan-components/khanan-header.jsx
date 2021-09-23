import React from "react";
import Klogo from "../khanan-img/Khanan'21-logo.png";
import "../khanan.css";
import Countdown from "../../../Home/Countdown";
const KhananHeader = () => {
  return (
    < div className="khanan-header" id="home">
      <img src={Klogo} alt="Khanan logo" />
      <a
        className="bt custom-button-khanan"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        REGISTER
      </a>
      <div className="k-count">
        <Countdown/>
        </div>
    </div>
  );
};

export default KhananHeader;
