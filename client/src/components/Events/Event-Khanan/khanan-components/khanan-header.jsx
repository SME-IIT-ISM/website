import React from "react";
import Klogo from "../khanan-img/khanan25logo.png";
import "../khanan.css";
// import Countdown from "../../../Home/Countdown";
const KhananHeader = () => {
  return (
    <div className="khanan-header" id="home" >
      <img src={Klogo} alt="Khanan logo" height={120} width={100} />

<div>    <button className="schedule" onClick={() => {
  const link = document.createElement("a");
  link.href = "/schedule.pdf"; // path to your PDF in public folder
  link.download = "Khanan_Schedule_2025.pdf"; // filename for download
  link.click();
}}>
  Download Schedule
</button></div>
     
    </div>

  );
};

export default KhananHeader;
