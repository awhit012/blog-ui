import React, { Component } from 'react';
import './Blog.css';
import ReactImageFallback from "react-image-fallback";
import Timestamp from 'react-timestamp';
import ReactHtmlParser from 'react-html-parser';


class BlogShow extends Component {
  render() {
    if(this.props.content) {
      console.log(this.props.content)
    }
    
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
	      	<div className="blog-show">{ReactHtmlParser(this.props.content)}</div>	
		    </div>
	    </div>
    );
  }
}

export default BlogShow;



