import React, { Component } from 'react';
import BlogPreview from './BlogPreview';
import axios from 'axios';


class BlogIndexContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    blogs: []
	  };
	}

	componentDidMount() {
		let thisBlog = this;
		axios.get('https://fibrowarriorapi.herokuapp.com/api/v1/posts')
		  .then(function (response) {
		  	let orderedPosts = thisBlog.orderByDate(response.data.data);
		    thisBlog.setState({
		    	blogs: orderedPosts
		    })
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	orderByDate(arr, timestamp) {
	  return arr.slice().sort(function (a, b) {
	    return a[timestamp] < b[timestamp] ? -1 : 1;
	  });
	}

  render() {
  	let blogs;  	
  	if(this.state.blogs) {
  		blogs = this.state.blogs.map( (blog, index) => {
  			return <BlogPreview key={index} 
  						id={blog._id}
  						timeStamp = {blog.timestamp}
  						img = {blog.featuredImage}
		  				title={blog.title} 
		  				content={blog.content}/>
  		})
  	}
    return (
    	<div id="blog-container">{blogs}</div>
    );
  }
}

export default BlogIndexContainer;