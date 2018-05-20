import React, { Component } from 'react';
import BlogShow from './BlogShow';
import axios from 'axios';


class BlogShowContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    blog: {}
	  };
	}

	componentDidMount() {
		let thisBlog = this;
		axios.get('http://localhost:8080/api/v1' +this.props.location.pathname )
		  .then(function (response) {
		  	console.log(response)
		    thisBlog.setState({
		    	blog: response.data.data
		    })
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

  render() {
    return (
    	<BlogShow
			timeStamp = {this.state.blog.timestamp}
			img = {this.state.blog.featuredImage}
			title={this.state.blog.title} 
			content={this.state.blog.content}/>
    );
  }
}

export default BlogShowContainer;