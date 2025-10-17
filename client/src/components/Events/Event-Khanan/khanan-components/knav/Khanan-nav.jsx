import React from "react";
import "./knav.css";
import { IoHome, IoTrophySharp } from "react-icons/io5";
import { RiCalendarEventFill, RiGalleryFill, RiTimeLine } from "react-icons/ri";

const Knav = () => {
  return (
    <div className="knavi">
      <ul>
        <li>
          <a className="knav-image" href="#home">
            <div className="knav-content">
              <IoHome />
              <span>Home</span>
            </div>
          </a>
        </li>
        <li>
          <a className="knav-image" href="#events">
            <div className="knav-content">
              <RiCalendarEventFill />
              <span>Events</span>
            </div>
          </a>
        </li>
     
        <li>
          <a className="knav-image" href="#gallery">
            <div className="knav-content">
              <RiGalleryFill />
              <span>Gallery</span>
            </div>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Knav;