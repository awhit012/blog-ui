import React, { Component } from 'react';
import StoreItem from './StoreItem';
import Items from './Items.json'


class StoreItemContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    item: {}
	  };
    let id = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
    let item = Items.filter(item => item.id === id);
    console.log(id, item)

    this.setState({
      item: item
    })
	}

  render() {
  	let item;
  	if( this.state.item) {
  		item = <StoreItem
    		id={this.state.item._id}
        name = {this.state.item.name}
        img = {this.state.item.img}
        description={this.state.item.description} 
        categories = {this.state.item.categories}/>
  	} else {
  		item = <span>...</span>
  	}
    return (
    	item
    );
  }
}

export default StoreItemContainer;