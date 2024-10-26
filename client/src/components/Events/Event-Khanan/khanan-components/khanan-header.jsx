import React from "react";
import Klogo from "../khanan-img/Khanan'22-logo.png";
import "../khanan.css";
// import Countdown from "../../../Home/Countdown";
const KhananHeader = () => {
  return (
    <div className="khanan-header" id="home" >
      <img src={Klogo} alt="Khanan logo" height={120} width={100} />
      <a
        className="bt custom-button-khanan"
        href="https://khanan-og.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        REGISTRATION PORTAL
      </a>
      <div className="k-count">{/* <Countdown/> */}</div>
    </div>
  );
};

export default KhananHeader;
