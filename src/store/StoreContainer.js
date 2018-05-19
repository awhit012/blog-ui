import React, { Component } from 'react';
import Store from './Store';

class StoreContainer extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
	    items: []
	  };
	}

  render() {
    return (
      <Store />
    );
  }
}

export default StoreContainer;


