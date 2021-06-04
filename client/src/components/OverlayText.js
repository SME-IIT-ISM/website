import React from "react";
import khananImage from "../image/khanan.jpg";
import Countdown from "./Countdown";

const OverlayText = (props) => {
  return (
    <div class="img-container">
      <img src={khananImage} alt="" />
      <div class="overlay">
        <span>overlay content</span>
        <Countdown />
      </div>
    </div>
  );
};

export default OverlayText;
