import React from "react";
import "./timeline.css";

const Tcard = (props) => {
  const day = props.day;
  const achievement = props.ach;
  const month = props.m;
  const title = props.title;
  const year = props.year;

  return (
    <div className="timeline">
      <div className="timeline__group">
        <span className="timeline__year time" aria-hidden="true">
          {year}
        </span>
        <div className="timeline__card tcard">
          <header className="tcard__header">
            <time className="time">
              <span className="time__day">{day}</span>
              <span className="time__month">{month}</span>
            </time>
            <h3 className="tcard__title r-title">{title}</h3>
          </header>
          <div className="tcard__content">
            <p>{achievement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tcard;
