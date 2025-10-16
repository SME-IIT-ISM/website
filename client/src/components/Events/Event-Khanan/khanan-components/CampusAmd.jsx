import React from "react";
import { Container, Row, Col } from "reactstrap";

const Campus = () => {
  return (
    <div className="k-amd my-5 mx-auto text-center p-4 shadow-sm rounded-2xl bg-white flex-col" id="campus">
     
          <p>
            Looking for a chance to lead your college? Register for <b><l>CAMPUS
            AMBASSADOR</l></b> now and get a chance to be an extended part of organizing
            team of KHANAN'24. Here we offer you a chance to represent your
            college and get acknowledged for this enthusiastic work. All you
            have to do is lead the contingent from your college and make sure
            everyone there gets to know about it. Bear the responsibility and
            get ready for a thrilling experience.
          </p>
          <div>
        <a
  className="btn-register"
  href="https://docs.google.com/forms/d/e/1FAIpQLScmICWoFEONyPRWKYRlxeKiDQ_WIRwh_mEAUcRdBJAKFu-3hw/viewform"
  target="_blank"
  rel="noopener noreferrer"
>
  REGISTER
</a>

          </div>
      
    </div>
  );
};

export default Campus;
