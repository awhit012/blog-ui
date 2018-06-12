import React, { Component } from 'react';
import './Blog.css';
import ReactImageFallback from "react-image-fallback";
import Timestamp from 'react-timestamp';
import ReactHtmlParser from 'react-html-parser';


class BlogShow extends Component {
  render() {
    return (
    	<div className="container">
  			<ReactImageFallback src={this.props.blog.img}
  				initialImage="/images/loading_icon.gif"
  				fallbackImage="/images/profile2018.png"/>
		    <div className="blog-right">
      			<h1>{this.props.blog.title}</h1>
	    		<Timestamp 
	    			time={this.props.blog.timestamp} 
	    			format='date' 
	    			className="timestamp"/>
	      	<div className="blog-show">{ReactHtmlParser(this.props.blog.content)}</div>	
		    </div>
	    </div>
    );
  }
}

export default BlogShow;



