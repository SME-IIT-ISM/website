import React, { Component } from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import FacultyAdvisor from "./OfficeBearers/FacultyAdvisor.jpg";
import President from "./OfficeBearers/President.jpg";
import VicePresident from "./OfficeBearers/VicePresident.jpg";
import SecretaryErra from "./OfficeBearers/SecretaryErra.jpg";
import Secretary from "./OfficeBearers/Secretary.jpg";
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
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/in/dheeraj-kumar-915440a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Dheeraj Kumar</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Shivendra Kumar Acharya</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Anjali Atreyi</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Madhav Singhal</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/in/jai-anand-0890b5197/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Jai Anand</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/mwlite/in/suyash-ranjan-6380951a5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Suyash Ranjan</h5>
                    <p className="card-text">Ad Secretory</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={BDHead} alt="BD Head" />
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/in/sudeshna-kundu-61490b1a8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Sudeshna Kundu</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/in/sumit-kumar-mudi-0a767a1b8//"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Sumit Kumar Mudi</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Abhya Adri</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Rishabh Kaushal</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/in/syed-ahaider/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Syed Ali Hyder</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Ashmit Sharma</h5>
                    <p className="card-text">Ad Designing Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={PRHead} alt="PR Head" />
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">AmlanJyoti Majumdar</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Mohit Kumar</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Aman Raj</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/in/anusha-priyadarshi-baa9a01b8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Anusha Priyadarshi</h5>
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
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Santu Kumar</h5>
                    <p className="card-text">Membership Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={OurTeam1} alt="OurTeam1" />
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/in/chelsi-mehta-536aa6187/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Chelsi Mehta</h5>
                    <p className="card-text">Marketing Head</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={OurTeam1} alt="OurTeam1" />
                  <div className="team-social-handles">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Abhijeet Haldar</h5>
                    <p className="card-text">Technical Mining</p>
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
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/in/abhinav-kumar-singh-6813501b8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Abhinav Kumar Singh</h5>
                    <p className="card-text">Position</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={OurTeam1} alt="OurTeam1" />
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/in/abhijeet-haldar-59813a1b4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Abhijeet Haldar</h5>
                    <p className="card-text">Position</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <div className="card p-2">
                  <img className="card-img-top" src={OurTeam1} alt="OurTeam1" />
                  <div className="team-social-handles">
                    <a
                      href="https://www.linkedin.com/in/kartik-saini-a1a240195/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-linkedin"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Kartik Saini</h5>
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
