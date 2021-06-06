import React, { Component } from "react";
import FacultyAdvisor from "./OfficeBearers/FacultyAdvisor.jpg";
import VicePresident from "./OfficeBearers/VicePresident.jpg";
import President from "./OfficeBearers/President.jpg";
import Secretary from "./OfficeBearers/Secreatory.jpg";
import AdDesigningHead from "./OfficeBearers/AdDesigningHead.jpg";
import BDHead from "./OfficeBearers/BDHead.jpg";
import DraftingHead from "./OfficeBearers/DraftingHead.jpg";
import PRHead from "./OfficeBearers/PRHead.jpg";
import PromotionHead from "./OfficeBearers/PromotionHead.jpg";
import MembershipHead from "./OfficeBearers/MembershipHead.jpg";
import EventHead from "./OfficeBearers/EventHead.jpg";
import AdEventHead from "./OfficeBearers/AdEventHead.jpg";
import SecretaryErra from "./OfficeBearers/SecretaryErra.jpg";
import Treasurer from "./OfficeBearers/Treasurer.jpg";
import DesigningHead from "./OfficeBearers/DesigningHead.jpg";
import AdSecreatory from "./OfficeBearers/AdSecreatory.jpg";
import OurTeam1 from "./OfficeBearers/OurTeam1.jpg";
// import MarketingHead from "./OfficeBearers/MarketingHead.jpg";
import MediaHead from "./OfficeBearers/MediaHead.jpg";

class OurTeam extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="text-center text-uppercase  heading my-5 heading-block">
          Office Bearers
        </h1>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={FacultyAdvisor}></img>
                <div class="box-content">
                  <h3 class="title">Dheerj Kumar</h3>
                  <span class="post">Faculty Advisor</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={President}></img>
                <div class="box-content">
                  <h3 class="title">Shivendra Kumar Acharya</h3>
                  <span class="post">President</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={VicePresident}></img>
                <div class="box-content">
                  <h3 class="title">Anjali Atreyi</h3>
                  <span class="post">Vice President</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={SecretaryErra}></img>
                <div class="box-content">
                  <h3 class="title">Madhav Singhal</h3>
                  <span class="post">Secretory ERAA</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-uppercase  heading my-5 heading-block">
          Core Team
        </h1>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={Secretary}></img>
                <div class="box-content">
                  <h3 class="title">Jai Anand</h3>
                  <span class="post">Secretory</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={AdSecreatory}></img>
                <div class="box-content">
                  <h3 class="title">Suyash Ranjan</h3>
                  <span class="post">Ad. Secretory</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={BDHead}></img>
                <div class="box-content">
                  <h3 class="title">Sudeshna Kundu</h3>
                  <span class="post">BD Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={EventHead}></img>
                <div class="box-content">
                  <h3 class="title">Sumit Kumar Mudi</h3>
                  <span class="post">Event Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={AdEventHead}></img>
                <div class="box-content">
                  <h3 class="title">Abhya Adri</h3>
                  <span class="post">Add. Event Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={Treasurer}></img>
                <div class="box-content">
                  <h3 class="title">Rishab Kaushal</h3>
                  <span class="post">Treasurer</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={DesigningHead}></img>
                <div class="box-content">
                  <h3 class="title">Syed Ali Haider</h3>
                  <span class="post">Designing Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={AdDesigningHead}></img>
                <div class="box-content">
                  <h3 class="title">Ashmit Sharma</h3>
                  <span class="post">Ad.Designing Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={PRHead}></img>
                <div class="box-content">
                  <h3 class="title">AmlanJyoti Majumdar</h3>
                  <span class="post">PR Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={OurTeam1}></img>
                <div class="box-content">
                  <h3 class="title">Abhijeet Haldar</h3>
                  <span class="post">Teachnical Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={MediaHead}></img>
                <div class="box-content">
                  <h3 class="title">Mohit Kumar</h3>
                  <span class="post">Media Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={PromotionHead}></img>
                <div class="box-content">
                  <h3 class="title">Aman Raj</h3>
                  <span class="post">Promotion Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container my-5">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={OurTeam1}></img>
                <div class="box-content">
                  <h3 class="title">Chelsi Mehta</h3>
                  <span class="post">Marketing Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={DraftingHead}></img>
                <div class="box-content">
                  <h3 class="title">Anusha Priyadarshi</h3>
                  <span class="post">Drafting Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={MembershipHead}></img>
                <div class="box-content">
                  <h3 class="title">Santu Kumar</h3>
                  <span class="post">Membership Head</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-uppercase  heading my-5 heading-block">
          Developers
        </h1>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={OurTeam1}></img>
                <div class="box-content">
                  <h3 class="title">Abhinav Kumar Singh</h3>
                  <span class="post">Web developer</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={OurTeam1}></img>
                <div class="box-content">
                  <h3 class="title">Abhijeet Haldar</h3>
                  <span class="post">Web developer</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img src={OurTeam1}></img>
                <div class="box-content">
                  <h3 class="title">Kartik Saini</h3>
                  <span class="post">Web developer</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
