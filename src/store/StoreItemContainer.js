import React, { Component } from 'react';
import StoreItem from './StoreItem';
import Items from './Items.json'


class StoreItemContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    item: {}
	  };
	}

  componentDidMount() {
    let id = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
    let currentItem = Items.filter((item) => {
      return String(item._id) === id;
    })
    this.setState({
      item: currentItem[0]
    })
  }

  render() {
  	let item;
  	if( this.state.item && this.state.item._id) {
  		item = <StoreItem
    		id={this.state.item._id}
        name = {this.state.item.name}
        img = {this.state.item.img}
        description = {this.state.item.description} 
        myTake = {this.state.item.myTake}
        categories = {this.state.item.categories}
        url = {this.state.item.url}/>
  	} else {
  		item = <StoreItem
        id={0}
        name = "Item Not Found"
        img = ""
        description="..."
        myTake="..."
        categories = {[]}/>
  	}
    return (
    	item
    );
  }
}

export default StoreItemContainer;