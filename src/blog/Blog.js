import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
    	<div className="container">
	      <h1>{this.props.title}</h1>
	      <p>{this.props.content}</p>	
	    </div>
    );
  }
}

export default Blog;



