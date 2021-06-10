import React, { useState } from "react";
import Logo from "./logo.png";
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" color="light" light fixed="top">
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
            <UncontrolledDropdown className="mx-lg-2 text-center" nav inNavbar>
              <DropdownToggle nav caret>
                Events
              </DropdownToggle>
              <DropdownMenu right>
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
            <UncontrolledDropdown className="mx-lg-2 text-center" nav inNavbar>
              <DropdownToggle nav caret>
                Resources
              </DropdownToggle>
              <DropdownMenu right>
                <a className="nav-dropdown" href="/resources/blogs">
                  <DropdownItem className="text-center">Blogs</DropdownItem>
                </a>
                <a className="nav-dropdown" href="/resources/calender">
                  <DropdownItem className="text-center">
                    Annual Calender
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
              >
                <RiFacebookFill />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="mx-1 px-2 social-instagram"
                href="https://www.instagram.com/sme_iitism/"
              >
                <RiInstagramFill />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="mx-1 px-2 social-linkedin"
                href="https://www.linkedin.com/company/sme-iit-ism-student-chapter2020"
              >
                <RiLinkedinBoxFill />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="mx-1 px-2 social-youtube"
                href="https://www.youtube.com/channel/UCngC6aD1tTfpMBMXoqRBiog/"
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
