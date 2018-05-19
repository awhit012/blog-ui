import React, { Component } from 'react';
import './Blog.css';
import ReactImageFallback from "react-image-fallback";
import { LinkContainer } from 'react-router-bootstrap';
import Timestamp from 'react-timestamp';


class BlogShow extends Component {
  render() {
    return (
    	<div className="container">
  			<ReactImageFallback src={this.props.img}
  				initialImage="/images/loading_icon.gif"
  				fallbackImage="/images/profile2018.png"/>
		    <div className="blog-right">
      			<h1>{this.props.title}</h1>
	    		<Timestamp 
	    			time={this.props.timestamp} 
	    			format='date' 
	    			className="timestamp"/>
	      	<p>{this.props.content}</p>	
		    </div>
	    </div>
    );
  }
}

export default BlogShow;



