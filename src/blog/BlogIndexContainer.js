import React, { Component } from 'react';
import BlogPreview from './BlogPreview';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CategoriesContainer from '../ui-components/CategoriesContainer';
import CategoriesMenu from '../ui-components/CategoriesMenu';
import {getCategories, filterByCategory} from '../Helper.js'
import './Blog.css';

const noBlog = {
	title: "An Error has occured.",
	content: "Please check back with us soon, we are working hard on a solution."
}

class BlogIndexContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    allBlogs: [],
	    blogs: [],
	    categories: []
	  };
	  this.orderByLikes   = this.orderByLikes.bind(this);
	  this.orderByDate    = this.orderByDate.bind(this);
	  this.handleFilterClick = this.handleFilterClick.bind(this);
	}

	componentDidMount() {
		let blogIndexContainer = this;
		axios.get('https://agitated-sammet-4499d9.netlify.com/api/v1/posts')
		  .then(function (response) {
		  	let blogs = response.data.data
		    blogIndexContainer.setState({
		    	allBlogs: blogs,
		    	blogs: blogs, 
		    	categories: getCategories(blogs)
		    }, () => {
		  		blogIndexContainer.orderByDate();
		    });
		  })
		  .catch(function (error) {
		    console.log(error);
		    blogIndexContainer.setState({
		    	blogs: [noBlog]
		    })
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

	handleFilterClick(category) {
    this.setState({blogs: filterByCategory(category, this.state.allBlogs)});
  }

  render() {
  	let blogs; 
  	if(this.state.blogs) {
  		blogs = this.state.blogs.map( (blog, index) => {
  			return <div key={index}>
  						<BlogPreview key={index} 
	  						id={blog._id}
	  						timeStamp = {blog.timestamp}
	  						img = {blog.featuredImage}
			  				title={blog.title} 
			  				content={blog.content}
			  				likes={blog.likes}/>
			  			<CategoriesContainer
			  				key={index + 1000}
				  			className= "categories-container-index"
								categories = {blog.categories}/>
					</div>
  		})
  	}
    return (
    	<div>
    		<span className="sort-buttons">
	    		<Button onClick={this.orderByDate}>By Date</Button>
      			<Button onClick={this.orderByLikes}>By Likes</Button>



      			<CategoriesMenu className="categories-menu"
      				categories={this.state.categories}
      				handleFilterClick={this.handleFilterClick}/>



      				
    		</span>	
    		<div id="blog-container">{blogs}</div>
    	</div>
    );
  }
}

export default BlogIndexContainer;