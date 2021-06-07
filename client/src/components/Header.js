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
            {/* <NavItem> */}
            {/* <NavLink className="mx-2" href="/events"> */}
            <UncontrolledDropdown className="mx-2" nav inNavbar>
              <DropdownToggle nav caret>
                Events
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* </NavLink> */}
            {/* </NavItem> */}
            <NavItem>
              <NavLink className="mx-2" href="/gallery">
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-2" href="/resources">
                Resources
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
          <Nav
            className="mx-auto d-none d-xl-flex text-white social-nav"
            navbar
          >
            <NavItem>
              <NavLink
                className="mx-2 facebook-nav"
                href="https://m.facebook.com/pg/smeiitism/posts/?ref=page_internal&mt_nav=0"
              >
                <RiFacebookFill />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-2 instagram-nav"
                href="https://www.instagram.com/sme_iitism/"
              >
                <RiInstagramFill />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-2 linkedin-nav"
                href="https://www.linkedin.com/company/sme-iit-ism-student-chapter2020"
              >
                <RiLinkedinBoxFill />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-2 youtube-nav"
                href="https://www.youtube.com/channel/UCngC6aD1tTfpMBMXoqRBiog/"
              >
                <RiYoutubeFill />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
