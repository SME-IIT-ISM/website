import React from "react";
import Klogo from "../khanan-img/khanan-logo.png";

import "../khanan.css";

const KhananHeader = () => {
  return (
    <div className="khanan-header" id="home">
      <img src={Klogo} alt="Khanan logo" />
      <a className="bt custom-button-khanan pt-3 " href="/">
        REGISTER
      </a>
    </div>
  );
};

export default KhananHeader;
