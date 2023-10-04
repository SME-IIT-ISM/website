import React, { useState, useEffect } from "react";
import Logo from "./logo.png";
import smeLogo from "../assets/sme.png";
import ciiLogo from "../assets/cii.png";
import texminLogo from "../assets/texmin.png";
import ismLogo from "../assets/ism.png";

import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useLocation } from "react-router-dom";
import { FaWindowRestore } from "react-icons/fa";

const Header = () => {
  const [dimension, setDiemension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDD1, setIsOpenDD1] = useState(false);
  const [isOpenDD2, setIsOpenDD2] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleOpen1 = () => setIsOpenDD1(true);
  const handleClose1 = () => setIsOpenDD1(false);

  const handleOpen2 = () => setIsOpenDD2(true);
  const handleClose2 = () => setIsOpenDD2(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setDiemension({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
  });

  if (location.pathname === "/events/khanan")
    return (
      <div className={dimension.width < 767 ? "d-none" : ""}>
        <Navbar
          className="solid-navbar d-flex align-items-center justify-content-around"
          expand="md"
          light
          fixed="top"
          id="khanan-nav"
        >
          <div>
            <img src={ismLogo} alt="" height="120px" />
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ gap: "5rem" }}
          >
            {/* <img src={ciiLogo} alt="" height="70rem" /> */}
            {/* <img src={texminLogo} alt="" height="70rem" /> */}
            <img src={smeLogo} alt="" height="70rem" />
          </div>
        </Navbar>
      </div>
    );

  return (
    <div>
      <Navbar className="solid-navbar" expand="md" light fixed="top">
        <NavbarBrand className="mx-4 my-2" href="/">
          <img src={Logo} className="d-inline-block align-top" alt="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem className="">
              <NavLink className="mx-lg-2 text-center" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-lg-2 text-center" href="/gallery">
                Gallery
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              isOpen={isOpenDD1}
              className="mx-lg-2 text-center"
              nav
              inNavbar
            >
              <DropdownToggle
                nav
                caret
                onMouseEnter={handleOpen1}
                onMouseLeave={handleClose1}
              >
                Events
              </DropdownToggle>
              <DropdownMenu
                right
                onMouseEnter={handleOpen1}
                onMouseLeave={handleClose1}
              >
                <a className="nav-dropdown" href="/events/khanan">
                  <DropdownItem className="text-center">Khanan</DropdownItem>
                </a>
                <a className="nav-dropdown" href="/events/general">
                  <DropdownItem className="text-center">
                    SME General Events
                  </DropdownItem>
                </a>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown
              isOpen={isOpenDD2}
              className="mx-lg-2 text-center"
              nav
              inNavbar
            >
              <DropdownToggle
                nav
                caret
                onMouseEnter={handleOpen2}
                onMouseLeave={handleClose2}
              >
                Resources
              </DropdownToggle>
              <DropdownMenu
                right
                onMouseEnter={handleOpen2}
                onMouseLeave={handleClose2}
              >
                <a className="nav-dropdown" href="/resources/ind-info">
                  <DropdownItem className="text-center">
                    Industrial Info
                  </DropdownItem>
                </a>
                <a className="nav-dropdown" href="/resources/calender">
                  <DropdownItem className="text-center">
                    Annual Calendar
                  </DropdownItem>
                </a>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="mx-lg-2 text-center" href="/team">
                Our Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-lg-2 text-center" href="/about">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-lg-2 text-center" href="/contact">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <Nav
            className="mx-auto d-none d-xl-flex text-white social-nav justify-content-between"
            navbar
          >
            <NavItem>
              <a
                className="mx-1 px-2 social-facebook"
                href="https://m.facebook.com/pg/smeiitism/posts/?ref=page_internal&mt_nav=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookFill />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="mx-1 px-2 social-instagram"
                href="https://www.instagram.com/sme_iitism/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="mx-1 px-2 social-linkedin"
                href="https://www.linkedin.com/company/sme-iit-ism-student-chapter2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinBoxFill />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="mx-1 px-2 social-youtube"
                href="https://www.youtube.com/channel/UCngC6aD1tTfpMBMXoqRBiog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiYoutubeFill />
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
