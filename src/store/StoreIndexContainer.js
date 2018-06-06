import React, { Component } from 'react';
import StorePreview from './StorePreview';
import './Store.css';
import Items from './Items.json'
import CategoriesMenu from '../ui-components/CategoriesMenu';
import {getCategories, filterByCategory} from '../Helper.js'


class StoreIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      allItems: [],
      items: []
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);

  }

  componentDidMount () {
    this.setState({
      categories: getCategories(Items),
      allItems: Items, 
      items: Items
    });
  }

  handleFilterClick(category) {
    this.setState({items: filterByCategory(category, this.state.allItems)});
  }

  render() {
    let items;
    items = this.state.items.map( (item, index) => {
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
        <CategoriesMenu className="categories-menu"
          categories={this.state.categories}
          handleFilterClick={this.handleFilterClick}/>
        <div className="container">{items}</div>
      </div>  
    );
  }
}

export default StoreIndexContainer;


