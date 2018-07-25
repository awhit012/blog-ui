import React, { Component } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import BlogIndexContainer from './blog/BlogIndexContainer';
import BlogShowContainer from './blog/BlogShowContainer';
import StoreIndexContainer from './store/StoreIndexContainer';
import StoreItemContainer from './store/StoreItemContainer';
import About from './pages/About';
import Home from './pages/Home';
import HelpContainer from './help/HelpContainer';

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
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={BlogIndexContainer} />
              <Route exact path="/posts/:id" component={BlogShowContainer}/>
              <Route path="/store" component={StoreIndexContainer} />
              <Route exact path="/items/:id" component={StoreItemContainer}/>
              <Route path="/help" component={HelpContainer} />
              <Route path="/about" component={About} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
