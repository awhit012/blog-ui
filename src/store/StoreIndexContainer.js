import React, { Component } from 'react';
import StorePreview from './StorePreview';
import './Store.css';
import Items from './Items.json'

class StoreIndexContainer extends Component {
  render() {
    let items;
    items = Items.map( (item, index) => {
      return <StorePreview key={index} 
            id={item._id}
            name = {item.name}
            description={item.description} 
            img = {item.img}
            categories = {item.categories}/>
    })
    return (
      <div>
        <h3 className="store-header">The following is a list of goods I personally stand behind as being significantly helpful in my fight against Fibromyalgia, Chronic Fatigue, Chronic Pain, IBS, and LBS.</h3>
        <div className="container">{items}</div>
      </div>  
    );
  }
}

export default StoreIndexContainer;


