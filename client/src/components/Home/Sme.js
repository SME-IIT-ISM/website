import React from "react";
import Smei from "./image/int.png";
const SME = (props) => {
  return (
    <div>
      <div className="sme">
        <div className="sme-content">
          <h2>Want to connect with professionals across the globe?</h2>
          <h3>Connect to the Mining Profesional worldwide</h3>
        </div>
        <a href="/"></a>
      </div>
      <div className="int-cont ">
        <img src={Smei} alt="logo_sme_int" className="int_logo" />
      </div>
    </div>
  );
};
export default SME;
