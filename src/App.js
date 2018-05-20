import React, { Component } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import BlogIndexContainer from './blog/BlogIndexContainer';
import BlogShowContainer from './blog/BlogShowContainer';
import StoreIndexContainer from './store/StoreIndexContainer';
import StoreItemContainer from './store/StoreItemContainer';
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
              <Route exact path="/" component={BlogIndexContainer} />
              <Route exact path="/posts/:id" component={BlogShowContainer}/>
              <Route path="/store" component={StoreIndexContainer} />
              <Route exact path="/items/:id" component={StoreItemContainer}/>
              <Route path="/help" component={Help} />
              <Route path="/about" component={About} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
