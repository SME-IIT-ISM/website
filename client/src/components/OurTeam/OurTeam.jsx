import React, { Component } from "react";
import FacultyAdvisor from "./OfficeBearers/FacultyAdvisor.jpg";
import President from "./OfficeBearers/President.jpg";
import VicePresident from "./OfficeBearers/VicePresident.jpg";
import SecretaryErra from "./OfficeBearers/SecretaryErra.jpg";
import Secretary from "./OfficeBearers/Secreatory.jpg";
import AdSecretory from "./OfficeBearers/AdSecretory.jpg";
import BDHead from "./OfficeBearers/BDHead.jpg";
import EventHead from "./OfficeBearers/EventHead.jpg";
import AdEventHead from "./OfficeBearers/AdEventHead.jpg";
import Treasurer from "./OfficeBearers/Treasurer.jpg";
import DesigningHead from "./OfficeBearers/DesigningHead.jpg";
import AdDesigningHead from "./OfficeBearers/AdDesigningHead.jpg";
import PRHead from "./OfficeBearers/PRHead.jpg";
import MediaHead from "./OfficeBearers/MediaHead.jpg";
import PromotionHead from "./OfficeBearers/PromotionHead.jpg";
import DraftingHead from "./OfficeBearers/DraftingHead.jpg";
import MembershipHead from "./OfficeBearers/MembershipHead.jpg";
import OurTeam1 from "./OfficeBearers/OurTeam1.jpg";
// import MarketingHead from "./OfficeBearers/MarketingHead.jpg";

class OurTeam extends Component {
  state = {};
  render() {
    return (
      <div className="p-4 m-5 text-center">
        <div>
          <h1 className="text-uppercase heading my-5 heading-block">
            Office Bearers
          </h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={FacultyAdvisor}
                    alt="Faculty Advisor"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Faculty Advisor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={President}
                    alt="President"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">President</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={VicePresident}
                    alt="Vice President"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Vice President</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={SecretaryErra}
                    alt="Secretary Erra"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Secretary Erra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-uppercase heading my-5 heading-block">
            Core Team
          </h1>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={Secretary}
                    alt="Secretary"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Secretary</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={AdSecretory}
                    alt="Ad Secretory"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Ad Secretory</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={BDHead} alt="BD Head" />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">BD Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={EventHead}
                    alt="Event Head"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Event Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={AdEventHead}
                    alt="Ad Event Head"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Ad Event Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={Treasurer}
                    alt="Treasurer"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Treasurer</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={DesigningHead}
                    alt="Designing Head"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Designing Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={AdDesigningHead}
                    alt="Ad Designing Head"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Ad Designing Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={PRHead} alt="PR Head" />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">PR Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={MediaHead}
                    alt="Media Head"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Media Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={PromotionHead}
                    alt="Promotion Head"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Promotion Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={DraftingHead}
                    alt="Drafting Head"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Drafting Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img
                    className="card-img-top"
                    src={MembershipHead}
                    alt="Membership Head"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Membership Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={OurTeam1} alt="OurTeam1" />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Position</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={OurTeam1} alt="OurTeam1" />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Position</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-uppercase heading my-5 heading-block">
            Developers
          </h1>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={OurTeam1} alt="OurTeam1" />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Position</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={OurTeam1} alt="OurTeam1" />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Position</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={OurTeam1} alt="OurTeam1" />
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Position</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
