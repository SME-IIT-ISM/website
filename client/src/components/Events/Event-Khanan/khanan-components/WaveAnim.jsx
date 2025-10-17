import React, { Component } from "react";
import Lottie from "lottie-react";
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
        <Lottie
          options={defaultOptions}
          height="auto"
          isClickToPauseDisabled={true}
        />
      </div>
    );
  }
}

export default WaveAnim;
