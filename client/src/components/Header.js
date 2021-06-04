import React, { useState } from "react";
import Logo from "../logo.png";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" color="dark" dark fixed="top">
        <NavbarBrand className="mx-4 my-2" href="/">
          <img
            src={Logo}
            className="d-inline-block align-top"
            alt="Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" id="bootstrap-overrides" navbar>
            <NavItem>
              <NavLink className="mx-2" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-2" href="/events">
                Events Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-2" href="/calender">
                Annual Calender
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-2" href="/team">
                Our Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-2" href="/about">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-2" href="/contact">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="mx-auto d-none d-xl-flex " navbar>
            <NavItem>
              <NavLink
                className="mx-2"
                href="https://m.facebook.com/pg/smeiitism/posts/?ref=page_internal&mt_nav=0"
              >
                <FaFacebookF />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-2"
                href="https://www.instagram.com/sme_iitism/"
              >
                <FaInstagram />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-2"
                href="https://www.linkedin.com/company/sme-iit-ism-student-chapter2020"
              >
                <FaLinkedin />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-2" href="/">
                <FaYoutube />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
