import React, { Component } from 'react';
import BlogShow from './BlogShow';
import CategoriesContainer from '../ui-components/CategoriesContainer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart';
import faHeartSolid from '@fortawesome/fontawesome-free-solid/faHeart';
import Divider from '@material-ui/core/Divider';
import BlogPosts from './BlogPosts.json'


class BlogShowContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		blog: {},
		// liked: false,
		// likes: 0,
	  };
	  // this.toggleLike = this.toggleLike.bind(this);
	  this.baseUrl = 'https://fibrowarriorapi.herokuapp.com/api/v1';
	}

	componentDidMount() {
		this.getBlog();
	}

	getBlog() {
		let regExp = new RegExp('[^/]+$')
		let id = regExp.exec(this.props.location.pathname)[0]
		console.log(id)
		let blog = BlogPosts.filter(blog => {
		  return blog._id === id
		})
		console.log(blog)
		this.setState({blog: blog[0]}) 
	}

	// getLikeFromLocalStorage() {
	//   let liked = localStorage.getItem(this.state.blog._id); 
	//   if (liked) {
	// 	this.setState({liked: true});
	//   }
	// }

	// toggleLike() {
	// 	this.setState({liked: !this.state.liked}, 
	// 		() => {
	// 			this.putLike(this.state.liked);
	// 			this.updateLocalStorage(this.state.liked);
	// 	});
	// 	this.trackLikes(this.state.liked);
	// }

	// trackLikes(liked) {
	// 	let change;
	// 	if(liked) {
	// 		change = -1;
	// 	} else {
	// 		change = 1;
	// 	}
	// 	this.setState({likes: this.state.likes + change});
	// }

	// putLike(liked) {
	// 	let likePath;
	// 	liked ? likePath = "/like" : likePath = "/unlike";
	// 	let url = this.baseUrl + this.props.location.pathname + likePath
	// 	axios.put(url)
	// 		.then(function (response) {
	// 		console.log(response);
	// 		})
	// 		.catch( function (error) {
	// 			console.log(error);
	// 		})
	// }

	// updateLocalStorage(liked) {
	// 	if(liked) {
	// 		localStorage.setItem(this.state.blog._id, liked)
	// 	} else {
	// 		localStorage.removeItem(this.state.blog._id)
	// 	}
	// }

  render() {
	let heart;
	this.state.liked ? heart = faHeartSolid : heart = faHeart;

	let citations;
	if(this.state.blog.citations) {
	  citations = this.state.blog.citations.map( (citation, index) => {
		  return <li key={index}><a href={citation}>{citation}</a></li>
	  })
	}

	return (
		<div>
			<BlogShow
					blog       = {this.state.blog}
					toggleLike = {this.toggleLike}
					liked      = {this.state.liked} />
				<CategoriesContainer 
					categories = {this.state.blog.categories}/>
				<Divider className="divider"/>
				<div className="citations">Citations:
					<ul>
				 		{citations}
					</ul>
				 </div>
		</div>
		
	);
  }
}

export default BlogShowContainer;