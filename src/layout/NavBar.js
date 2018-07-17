import React, { Component } from 'react';
import './NavBar.css';
import {AppBar, Tabs, Tab} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const logo = "/images/just-logo.png";
const companyName = "/images/fibroclarity-font.png";


class NavBar extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="My App">
          <Tabs>
            <Tab label="Blog" />
            <Tab label="Store" />
            <Tab label="Get Help" />
            <Tab label="About" />
          </Tabs>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default NavBar;


