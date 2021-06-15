import React from "react";
import "./timeline.css";

const Tcard = (props) => {
  const achievement = props.ach;
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
