import React, { Component } from "react";
import OurTeam1 from "../OfficeBearers/ourTeam1.png";
class OurTeam extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 class="text-center text-uppercase  heading my-5 heading-block">
          Office Bearers
        </h1>
        <div class="container">
          <div class="row">
            <div class="col my-5">
              <img
                className=" mx-auto d-block   "
                style={{ borderRadius: "10%" }}
                src={OurTeam1}
                alt=""
                width="250"
                height="300"
              ></img>
            </div>
          </div>
        </div>
        <div class="container ">
          <div class="row">
            <div className="  col-sm my-5">
              <img
                className=" mx-auto d-block  "
                style={{ borderRadius: "10%" }}
                src={OurTeam1}
                alt=""
                width="250"
                height="300"
              ></img>
            </div>
            <div className=" col-sm my-5">
              <img
                className=" mx-auto d-block"
                style={{ borderRadius: "10%" }}
                src={OurTeam1}
                alt=""
                width="250"
                height="300"
              ></img>
            </div>
          </div>
        </div>
        <h1 class="text-center text-uppercase  heading my-5 heading-block">
          Core Team
        </h1>
        <div class="container my-5 ">
          <div class="row">
            <div class="col-sm my-5">
              {" "}
              <img
                className=" mx-auto d-block "
                style={{ borderRadius: "10%" }}
                src={OurTeam1}
                alt=""
                width="250"
                height="300"
              ></img>
            </div>
            <div class="col-sm my-5">
              {" "}
              <img
                className=" mx-auto d-block "
                style={{ borderRadius: "10%" }}
                src={OurTeam1}
                alt=""
                width="250"
                height="300"
              ></img>
            </div>
            <div class="col-sm my-5">
              {" "}
              <img
                className=" mx-auto d-block "
                style={{ borderRadius: "10%" }}
                src={OurTeam1}
                alt=""
                width="250"
                height="300"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
