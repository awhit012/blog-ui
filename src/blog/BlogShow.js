import React, { Component } from 'react';
import './Blog.css';
import ReactImageFallback from "react-image-fallback";
import Timestamp from 'react-timestamp';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart';
import faHeartSolid from '@fortawesome/fontawesome-free-solid/faHeart';


class BlogShow extends Component {
  render() {

    let paragraphs;
    if(this.props.content) {
      let content = this.props.content.split("\r")
      paragraphs = content.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>
      });
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
	      	<div>{paragraphs}</div>	
		    </div>
	    </div>
    );
  }
}

export default BlogShow;



