import React from "react";
import khananImage from "../image/khanan.jpg";

const OverlayText = (props) => {
  return (
      <div class="img-container">
        <img src={khananImage} alt="" />
        <div class="overlay">
          <span>overlay content</span>
        </div>
    </div>
  );
};

export default OverlayText;
