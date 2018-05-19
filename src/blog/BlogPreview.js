import React, { Component } from 'react';
import './Blog.css';
import ReactImageFallback from "react-image-fallback";
import { LinkContainer } from 'react-router-bootstrap';
import Timestamp from 'react-timestamp';


class Blog extends Component {
  render() {
    return (
    	<div className="container">
  			<ReactImageFallback src={this.props.img}
  				initialImage="/images/loading_icon.gif"
  				fallbackImage="/images/profile2018.png"/>
		    <div className="blog-right">
		    	<LinkContainer to={"/posts/" + this.props.id}>
	      		<h1><a>{this.props.title}</a></h1>
          </LinkContainer>
	    		<Timestamp 
	    			time={this.props.timestamp} 
	    			format='date' 
	    			className="timestamp"/>
	      	<p>{this.props.content.substring(0,400) + "..."}</p>	
		    </div>
	    </div>
    );
  }
}

export default Blog;


