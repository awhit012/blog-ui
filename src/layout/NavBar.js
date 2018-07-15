import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css';
const logo = "/images/logo1.svg";

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="nav">
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <img src={logo} style={{width:100, marginTop: -7}} alt="fibroclarity logo"/>
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


