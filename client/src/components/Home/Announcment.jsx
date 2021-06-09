import React from "react";

const Announcement = () => {
  return (
    <div className="marquee-container">
      <div>
        <h1 className="heading text-uppercase text-center">Announcements</h1>
      </div>
      <div className="marquee-container">
        <div className="own-marquee">
          <b>
            <p>first</p>
            <br />
            <p>Second</p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
