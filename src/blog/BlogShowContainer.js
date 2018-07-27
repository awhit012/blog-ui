/*global firebase*/

import React, { Component } from 'react';
import BlogShow from './BlogShow';
import CategoriesContainer from '../ui-components/CategoriesContainer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart';
import faHeartSolid from '@fortawesome/fontawesome-free-solid/faHeart';
import Divider from '@material-ui/core/Divider';
import BlogPosts from './BlogPosts.json'

const config = {
  apiKey: "AIzaSyAns4julfcyHTu_5QnnEPO2fFlH0hESHYM",
  authDomain: "fibroclarity.firebaseapp.com",
  databaseURL: "https://fibroclarity.firebaseio.com",
  projectId: "fibroclarity",
  storageBucket: "fibroclarity.appspot.com",
  messagingSenderId: "473593075804"
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const database = firebase.database();


class BlogShowContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
			blog: {},
			liked: false,
			likes: null,
			id: 0
	  };
	  this.toggleLike = this.toggleLike.bind(this);
	}

	componentDidMount() {
		this.getBlog();
	}

	componentWillUnmount() {
    this.likeCountRef.off();
	}

	getBlog() {
		let regExp = new RegExp('[^/]+$')
		let id = regExp.exec(this.props.location.pathname)[0]
		let blog = BlogPosts.filter(blog => {
		  return blog._id === id
		})
		this.likeCountRef = database.ref('/' + id);
		this.setState({blog: blog[0], id: id}, () => { 
			this.getLikes();
		}) 
	}

	getLikes() {
		this.getLikeFromLocalStorage();
		let blogShowContainer = this;
		this.likeCountRef.on('value', function(snapshot) {
		  console.log("fire", snapshot.val());
		  blogShowContainer.setState({likes: snapshot.val()})
		});
	}

	getLikeFromLocalStorage() {
	  let liked = localStorage.getItem(this.state.blog._id); 
	  if (liked) {
			this.setState({liked: true}, console.log(this.state.liked));
	  }
	}

	toggleLike() {
		this.setState({liked: !this.state.liked}, 
			() => {
				this.putLike(this.state.liked);
				this.updateLocalStorage(this.state.liked);
		});
		this.trackLikes(this.state.liked);
	}

	trackLikes(liked) {
		let change;
		if(liked) {
			change = -1;
		} else {
			change = 1;
		}
		this.setState({likes: this.state.likes + change});
	}

	putLike(liked) {
		let currentLikes = this.state.likes;
		this.likeCountRef.transaction(function() {
	  	return (currentLikes || 0);
		});
	}

	updateLocalStorage(liked) {
		if(liked) {
			localStorage.setItem(this.state.blog._id, liked)
		} else {
			localStorage.removeItem(this.state.blog._id)
		}
	}

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
				<span className="like-span">
					<FontAwesomeIcon icon={heart} onClick={this.toggleLike}/>
					&nbsp;
					{this.state.likes}
				</span>
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