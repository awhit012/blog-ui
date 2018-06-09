import React, { Component } from 'react';
import './Blog.css';
import ReactImageFallback from "react-image-fallback";
import Timestamp from 'react-timestamp';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class BlogShow extends Component {
  render() {

    // let paragraphs;
    // if(this.props.content) {
    //   let content = this.props.content.split("\r")
    //   paragraphs = content.map((paragraph, index) => {
    //     return <p key={index}>{paragraph}</p>
    //   });
    // }
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
	      	<div>{ReactHtmlParser(this.props.content)}</div>	
		    </div>
	    </div>
    );
  }
}

export default BlogShow;



