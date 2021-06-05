import React from "react";
import Logo from "./logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = (props) => {
  return (
    <section className="footer">
      {/* <!-- Footer --> */}
      <footer className="text-white">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-12 mb-4 d-flex flex-column flex-md-row flex-lg-column justify-content-center justify-content-md-around justify-content-lg-center text-center">
              <div className="d-inline-block my-auto">
                <img
                  src={Logo}
                  height="60"
                  alt="Logo"
                />
              </div>
              <div className="mt-3">
                <h5 className="text-uppercase">Follow us on:</h5>
                <div className="icon-container">
                  <div className="icon icon-fill-facebook">
                    <FaFacebookF className="icon-tag" />
                  </div>
                  <div className="icon icon-fill-instagram">
                    <FaInstagram className="icon-tag" />
                  </div>
                  <div className="icon icon-fill-linkedin">
                    <FaLinkedin className="icon-tag" />
                  </div>
                  <div className="icon icon-fill-youtube">
                    <FaYoutube className="icon-tag" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-5 col-md-12 mb-4">
              <h5 className="text-uppercase">Contact</h5>

              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <FaMapMarkerAlt /> Department of Mining Engineering, IIT (ISM)
                  Dhanbad, Hirapur, Sardar Patel Nagar, Dhanbad, Jharkhand
                  826004
                </li>
                <li className="mb-2">
                  <FaPhoneAlt /> Phone: +91 7297812986
                </li>
                <li className="mb-2">
                  <FaEnvelope /> Email: smeiitismstudentchapter@gmail.com
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase mb-2">Links</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="https://www.smenet.org/" className="text-white">
                    SME International
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white">
                    Khanan
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.iitism.ac.in/" className="text-white">
                    IIT (ISM) Dhanbad Official Website
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://parent.iitism.ac.in/index.php/parent_portal/portal0"
                    className="text-white"
                  >
                    Parents Portal
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3 copyright">
          © 2021 Copyright: All rights reserved |{" "}
          <a className="text-white" href="/">
            SME IIT (ISM) Dhanbad Student Chapter
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </section>
  );
};

export default Footer;
