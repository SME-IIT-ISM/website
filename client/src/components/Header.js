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
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="mx-2" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-2" href="/gallery">
                Gallery
              </NavLink>
            </NavItem>
            <UncontrolledDropdown className="mx-2" nav inNavbar>
              <DropdownToggle nav caret>
                Events
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a className="nav-dropdown" href="/events/khanan">
                    Khanan
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a className="nav-dropdown" href="/events/general">
                    SME General Events
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="mx-2" nav inNavbar>
              <DropdownToggle nav caret>
                Resources
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a className="nav-dropdown" href="/resources/blogs">
                    Blogs
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a className="nav-dropdown" href="/resources/calender">
                    Annual Calender
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
          <Nav
            className="mx-auto d-none d-xl-flex text-white social-nav"
            navbar
          >
            <NavItem>
              <a
                className="mx-2 px-2 social-facebook"
                href="https://m.facebook.com/pg/smeiitism/posts/?ref=page_internal&mt_nav=0"
              >
                <RiFacebookFill />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="mx-2 px-2 social-instagram"
                href="https://www.instagram.com/sme_iitism/"
              >
                <RiInstagramFill />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="mx-2 px-2 social-linkedin"
                href="https://www.linkedin.com/company/sme-iit-ism-student-chapter2020"
              >
                <RiLinkedinBoxFill />
              </a>
            </NavItem>
            <NavItem>
              <a
                className="mx-2 px-2 social-youtube"
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
