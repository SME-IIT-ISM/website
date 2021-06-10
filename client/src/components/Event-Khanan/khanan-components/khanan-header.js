import React from "react";
import Klogo from "../khanan-img/khanan-logo.png";

import "../khanan.css";

const KhananHeader = () => {
  return (
    <div className="khanan-header">
      <img src={Klogo} alt-text="Khananlogo" />
      <a className="bt custom-button-khanan pt-3 " href="/">
        REGISTER
      </a>
    </div>
  );
};

export default KhananHeader;
