import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="nav">
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
                <a>Fibro Warrior | Alpha -- Prerelease</a>
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


