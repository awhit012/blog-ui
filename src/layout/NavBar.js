import React, { Component } from 'react';
import './NavBar.css';
import {AppBar, Tabs, Tab} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router-dom';

const logo = "/images/just-logo.png";
const companyName = "/images/fibroclarity-font.png";
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.white,
    accent1Color: '#6277a3',
    alternateTextColor: '#6277a3'
  },
  appBar: {
    height: 60,
  },
});

const home = <span> 
                <img src={logo} alt="fibroclarity logo" className="App-logo" />
                <img src={companyName} alt="fibroclarity" className="Company-Name"/>
            </span>

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'default',
    };
    this.handleActive = this.handleActive.bind(this);
  }
  
  componentWillMount() {
    let urlPath = window.location.pathname;
    let currentTab = urlPath.split('/').pop();
    this.setState({ activeTab: currentTab || 'default' });
  }

  handleActive(tab) {
    this.setState({ activeTab: tab || 'default' });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar iconElementLeft={(home)} className="App-Bar">
          <Tabs value={this.state.activeTab}>
            <Tab value="default" onActive={ () => this.handleActive("default") } className="tab" label="Blog" containerElement={<Link to="/"/>}/>
            <Tab value="store"   onActive={ () => this.handleActive("store") } className="tab" label="Store" containerElement={<Link to="/store"/>}/>
            <Tab value="help"    onActive={ () => this.handleActive("help") } className="tab" label="Get Help" containerElement={<Link to="/help"/>}/>
            <Tab value="about"   onActive={ () => this.handleActive("about") } className="tab" label="About" containerElement={<Link to="/about"/>}/>
          </Tabs>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default NavBar;


