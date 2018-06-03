import React, { Component } from 'react';
import BlogPreview from './BlogPreview';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class BlogIndexContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    blogs: []
	  };
	  this.orderByLikes = this.orderByLikes.bind(this);
	  this.orderByDate = this.orderByDate.bind(this);
	}

	componentDidMount() {
		let blogIndexContainer = this;
		axios.get('https://fibrowarriorapi.herokuapp.com/api/v1/posts')
		  .then(function (response) {
		    blogIndexContainer.setState({
		    	blogs: response.data.data
		    }, () => {
		  		blogIndexContainer.orderByDate();
		    });
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	orderByDate() {
		let blogIndexContainer = this;
	  let orderedPosts = blogIndexContainer.state.blogs.slice().sort(function (a, b) {
	    return a['timestamp'] > b['timestamp'] ? -1 : 1;
	  });
	  this.setState({blogs: orderedPosts})
	}

	orderByLikes() {
		let blogIndexContainer = this;
	  let orderedPosts = blogIndexContainer.state.blogs.slice().sort(function (a, b) {
	    return a['likes'] > b['likes'] ? -1 : 1;
	  });
	  this.setState({blogs: orderedPosts})
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
		  				content={blog.content}
		  				likes={blog.likes}/>
  		})
  	}
    return (
    	<div>
    		<span className="sort-buttons">
	    		<Button onClick={this.orderByDate}>By Date</Button>
	      		<Button onClick={this.orderByLikes}>By Likes</Button>
      		</span>	
    		<div id="blog-container">{blogs}</div>
    	</div>
    );
  }
}

export default BlogIndexContainer;