import React, { Component } from 'react';
import './Blog.css';
import ReactImageFallback from "react-image-fallback";
import { LinkContainer } from 'react-router-bootstrap';
import Timestamp from 'react-timestamp';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeartSolid from '@fortawesome/fontawesome-free-solid/faHeart';
import ReactHtmlParser from 'react-html-parser';


class Blog extends Component {
  render() {
  	let preview;
  	if(this.props.content) {
  		preview = this.props.content.split("</p>")[0].substring(0,400) + "...";
  	}
    return (
    	<div className="container">
  			<ReactImageFallback src={this.props.img}
  				initialImage="/images/loading_icon.gif"
  				fallbackImage="/images/profile2018.png"
  				className="blog-img"/>
		    <div className="blog-right">
		    	<LinkContainer to={"/posts/" + this.props.id}>
	      			<h1><a>{this.props.title}</a></h1>
          		</LinkContainer>
	    		<Timestamp 
	    			time={this.props.timestamp} 
	    			format='date' 
	    			className="timestamp"/>
	      		<div>{ReactHtmlParser(preview)}</div>
            <FontAwesomeIcon icon={faHeartSolid} onClick={this.toggleLike}/>
              &nbsp;
              {this.props.likes}
		    </div>
	    </div>
    );
  }
}

export default Blog;



