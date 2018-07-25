import React, { Component } from 'react';
import BlogPreview from './BlogPreview';
import BlogPosts from './BlogPosts.json'
import Button from '@material-ui/core/Button';
import CategoriesContainer from '../ui-components/CategoriesContainer';
import CategoriesMenu from '../ui-components/CategoriesMenu';
import {getCategories, filterByCategory} from '../Helper.js'
import './Blog.css';

class BlogIndexContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    blogs: [],
	    categories: []
	  };
	  this.orderByLikes   = this.orderByLikes.bind(this);
	  this.orderByDate    = this.orderByDate.bind(this);
	  this.handleFilterClick = this.handleFilterClick.bind(this);
	}

	componentDidMount() {
		this.setState({blogs: BlogPosts})
		this.setState({categories: getCategories(BlogPosts)});
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
    this.setState({blogs: filterByCategory(category, this.state.blogs)});
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