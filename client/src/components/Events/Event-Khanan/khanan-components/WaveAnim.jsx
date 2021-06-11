import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./wave-lottie.json";

class WaveAnim extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions} height="auto" />
      </div>
    );
  }
}

export default WaveAnim;
