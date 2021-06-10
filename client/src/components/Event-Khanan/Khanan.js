import React from "react";
import KhananHeader from "./khanan-components/khanan-header";
import KhananSlider from "./khanan-components/Kslider";
import Knav from "./khanan-components/knav/Khanan-nav";

import "./khanan.css";

const EventKhanan = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Knav />
      <KhananHeader />
      <KhananSlider />
    </div>
  );
};

export default EventKhanan;
