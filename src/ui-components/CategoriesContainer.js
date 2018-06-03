import React, { Component } from 'react';

import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

class CategoriesContainer extends Component {
  render() {
    let chips;
    if(this.props.categories) {
    	chips = this.props.categories.map((category, index) => {
			return (
	      <Chip
		        key={index}
		        label={category}
		        className="category"
		      />
	    	);
			})
    }
    

    return (
      <div className="categories-container">
      	{chips}
      </div>
    );
  }
}

export default CategoriesContainer;


