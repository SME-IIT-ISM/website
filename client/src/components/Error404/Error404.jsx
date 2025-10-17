import React, { Component } from "react";
import Lottie from "lottie-react";
import animationData from "./error404-lottie.json";
import "./error404.css";

class Error404 extends Component {
  componentDidMount() {
    document.title = "Error";
  }

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
      <div className="d-flex flex-column justify-content-center align-items-center lottie-404-container">
        <div>
          <Lottie
            options={defaultOptions}
            height="auto"
            width="50vw"
            isClickToPauseDisabled={true}
            style={{ maxWidth: "500px" }}
          />
        </div>
        <div>
          <p>{this.props.msg}</p>
        </div>
      </div>
    );
  }
}

export default Error404;
