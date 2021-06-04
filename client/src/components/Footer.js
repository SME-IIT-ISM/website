import React from "react";
import Logo from "../logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = (props) => {
  return (
    <section class="footer">
      {/* <!-- Footer --> */}
      <footer class="text-white">
        {/* <!-- Grid container --> */}
        <div class="container p-4">
          {/* <!--Grid row--> */}
          <div class="row">
            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              {/* <h5 class="text-uppercase">Footer Content</h5> */}
              <img
                src={Logo}
                height="60"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Contact</h5>

              <ul class="list-unstyled mb-0">
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
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-2">Links</h5>

              <ul class="list-unstyled">
                <li className="mb-2">
                  <a href="https://www.smenet.org/" class="text-white">
                    SME International
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" class="text-white">
                    Khanan
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.iitism.ac.in/" class="text-white">
                    IIT (ISM) Dhanbad Official Website
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://parent.iitism.ac.in/index.php/parent_portal/portal0"
                    class="text-white"
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
        <div class="text-center p-3 copyright">
          © 2021 Copyright: All rights reserved |{" "}
          <a class="text-white" href="/">
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
