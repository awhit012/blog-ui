import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css';
const logo = "/images/just-logo.png";
const companyName = "/images/fibroclarity-font.png";


class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="nav">
        <Navbar.Header>
          <Navbar.Brand>
            <span className="helper" />
            <LinkContainer to="/">
                <img src={logo} alt="fibroclarity logo"/>
            </LinkContainer>
             <LinkContainer to="/">
                <img src={companyName} alt="fibroclarity"/>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/">
              <NavItem>Blog</NavItem>
            </LinkContainer>
            <LinkContainer to="/store">
              <NavItem>Store</NavItem>
            </LinkContainer>
            <LinkContainer to="/help">
              <NavItem>Get Help</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;


