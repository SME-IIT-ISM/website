import React from "react";
import "./knav.css";
import { IoHome, IoTrophySharp } from "react-icons/io5";
import { RiCalendarEventFill, RiGalleryFill } from "react-icons/ri";

const Knav = () => {
  return (
    <div className="knavi">
      <ul>
        <li>
          <div className="knav-image">
            <a href="/">
              <IoHome />
            </a>
            <span>Home</span>
          </div>
        </li>
        <li>
          <div className="knav-image">
            <a href="/">
              <RiCalendarEventFill />
            </a>
            <span>Event</span>
          </div>
        </li>
        <li>
          <div className="knav-image">
            <a href="/">
              <IoTrophySharp />
            </a>
            <span>
              Campus <br /> Ambassador
            </span>
          </div>
        </li>
        <li>
          <div className="knav-image">
            <a className="knav-image" href="/">
              <RiGalleryFill />
            </a>
            <span>Gallery</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Knav;
