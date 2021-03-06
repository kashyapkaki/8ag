import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navbar8.css";
import AnimeLogo from "./AnimeLogo";

const Navbar8 = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      className="color-nav"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="/">
        <AnimeLogo alt="nyolcág logo" />
      </Navbar.Brand>
      <Navbar.Brand id="BrandNameFont">NYOLCÁGÚ JÓGA ALAPÍTVÁNY</Navbar.Brand>
      <Navbar.Brand id="nyolcag">NYOLCÁG</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="hoover" href="/">
            FŐOLDAL
          </Nav.Link>
          <Nav.Link className="hoover" href="/projektjeink">
            PROJEKTJEINK
          </Nav.Link>
          <NavDropdown title="TÁMOGATÁS" id="basic-nav-tamogatas">
            <NavDropdown.Item href="/egyszazalek" id="basic-nav-tamogatas-item">
              1%
            </NavDropdown.Item>
            <NavDropdown.Item href="/projekt" id="basic-nav-tamogatas-item">
              PROJEKT
            </NavDropdown.Item>
            <NavDropdown.Item href="/uvegzseb" id="basic-nav-tamogatas-item">
              ÜVEGZSEB
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="hoover" href="/blog">
            BLOG
          </Nav.Link>
          <Nav.Link className="hoover" href="/kapcsolat">
            KAPCSOLAT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar8;
