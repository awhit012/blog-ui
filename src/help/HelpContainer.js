import React, { Component } from 'react';
import HelpItems from './HelpItems.json';
import HelpItem from './HelpItem';
import './Help.css';


class HelpContainer extends Component {
  render() {
    let helpItems;
    helpItems = HelpItems.map( (item, index) => {
      return <HelpItem key={index} 
            item={item} />
    })
    return (
      <div className="store-container">
        <div className="container">{helpItems}</div>
      </div>  
    );
  }
}

export default HelpContainer;
