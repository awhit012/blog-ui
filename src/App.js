import React, { Component } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import BlogIndexContainer from './blog/BlogIndexContainer';
import BlogShowContainer from './blog/BlogShowContainer';
import StoreIndexContainer from './store/StoreIndexContainer';
import StoreItemContainer from './store/StoreItemContainer';
import About from './pages/About';
import HelpContainer from './help/HelpContainer';
import EmailModalContainer from './email-list/EmailModalContainer';
import ThankYou from './email-list/ThankYou';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <EmailModalContainer />
        <Router>  
          <div className="App">
            <NavBar />
              <div>
                <Route exact path="/" component={BlogIndexContainer} />
                <Route exact path="/posts/:id" component={BlogShowContainer}/>
                <Route path="/store" component={StoreIndexContainer} />
                <Route exact path="/items/:id" component={StoreItemContainer}/>
                <Route path="/help" component={HelpContainer} />
                <Route path="/about" component={About} />
                <Route path="/thank-you" component={ThankYou} />
              </div>
            <Footer />
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
