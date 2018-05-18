import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Fibro Warrior</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Blog
            </NavItem>
            <NavItem eventKey={2} href="#">
              Must Have Items
            </NavItem>
            <NavItem eventKey={3} href="#">
              Get Help
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;


