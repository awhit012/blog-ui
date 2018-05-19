import React, { Component } from 'react';
import Blog from './Blog';
import axios from 'axios';


class BlogContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    blogs: []
	  };
	}

	componentDidMount() {
		let thisBlog = this;
		axios.get('http://localhost:8080/api/v1/posts')
		  .then(function (response) {
		    console.log("data", response.data.data);
		    thisBlog.setState({
		    	blogs: response.data.data
		    })
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

  render() {
  	let blogs;  	
  	console.log("state", this.state)
  	if(this.state.blogs) {
  		blogs = this.state.blogs.map( (blog, index) => {
  			return <Blog key={index} 
			  				title={blog.title} 
			  				content={blog.content}/>
  		})
  	}
    return (
    	<div>{blogs}</div>
    );
  }
}

export default BlogContainer;