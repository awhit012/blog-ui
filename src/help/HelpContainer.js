import React, { Component } from 'react';
import HelpItems from './HelpItems.json';
import HelpItem from './HelpItem';
import './Help.css';


class HelpContainer extends Component {
  render() {
    let helpItems;
    helpItems = HelpItems.map( (item, index) => {
      return <HelpItem key={index} 
            id={item._id}
            name = {item.name}
            description={item.description} 
            img = {item.img}
            categories = {item.categories}/>
    })
    return (
      <div>
        <h3 className="store-header">The following are ways to get professional help that I have personally benefitted from, as well as a way to hire me as a Pain Management Life Coach.</h3>
        <div className="container">{helpItems}</div>
      </div>  
    );
  }
}

export default HelpContainer;
