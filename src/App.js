import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './layout/NavBar';
import BlogContainer from './blog/BlogContainer';
import StoreContainer from './store/StoreContainer';
import About from './pages/About';
import Help from './pages/Help';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>  
        <div className="App">
          <NavBar />
            <div>
              <Route exact path="/" component={BlogContainer} />
              <Route path="/store" component={StoreContainer} />
              <Route path="/help" component={Help} />
              <Route path="/about" component={About} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
