import React from "react";

const YouTube = () => {
  return (
    <div className>
      <iframe
        src="https://www.youtube.com/embed/zAXGRM9VWmM"
        title="YouTube video player"
        className="youtube"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTube;
