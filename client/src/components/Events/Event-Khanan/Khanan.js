import React from "react";
import KhananHeader from "./khanan-components/khanan-header";
import KhananSlider from "./khanan-components/Kslider";
import Knav from "./khanan-components/knav/Khanan-nav";
import KhananContent from "./khanan-components/Khanan-content";
import Kevent from "./khanan-components/k-events/KhananEvent";

import "./khanan.css";

const EventKhanan = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Knav />
      <KhananHeader />
      <KhananContent />
      <Kevent />
      <KhananSlider />
    </div>
  );
};

export default EventKhanan;
