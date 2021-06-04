import React from "react";
import khananImage from "../image/khanan.jpg";

const OverlayText = (props) => {
  return (
    <div class="img-container">
      <img src={khananImage} alt="" />
      <div class="overlay">
        <span>
          <h1>Khanan</h1>
          Participate in the Biggest Mining fest in India and fell into
          the invigorating world of Mining. You will be provided with a platform
          that presents your talent to the world and help you enhance and learn
          skills. Many esteemed guests are willing to share their knowledge are
          you willing to take it?
        </span>
      </div>
    </div>
  );
};

export default OverlayText;
