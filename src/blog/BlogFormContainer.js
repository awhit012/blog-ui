import React, { Component } from 'react';
import { EditorState, RichUtils } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import { Redirect } from 'react-router'
import './Blog.css';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import BlogForm from './BlogForm';
import axios from 'axios';

class BlogFormContainer extends Component {
	constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
      title: '',
      categories: [],
      imgUrl: ''
    };
	  this.postUrl = 'https://fibrowarriorapi.herokuapp.com/api/v1/posts';

    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);

  }

  onChange(editorState) {
  	this.setState({editorState: editorState})
  }

  handleKeyCommand(command) {
  	const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleCategoryChange(event) {
    this.setState({categories: event.target.value});
  }

  handleImgChange(event) {
    this.setState({imgUrl: event.target.value});
  }

  handleSubmit() {
    const contentState = this.state.editorState.getCurrentContent();
    let html = stateToHTML(contentState);
    // let blogFormContainer = this;
    let data = {
    	content: html,
    	title: this.state.title,
    	categories: this.state.categories.split(","),
    	featuredImage: this.state.imgUrl
    }
    axios.post(this.postUrl, data )
		  .then(function (response) {
		  	console.log(response);
		  	return <Redirect to='/' />
		  })
		  .catch(function (error) {
		    console.log(error);
		  });

  }

  render() {
    return (
    	<BlogForm 
    	editorState={this.state.editorState}
    	handleKeyCommand={this.handleKeyCommand}
    	onChange={this.onChange}
    	handleSubmit={this.handleSubmit}
    	handleTitleChange={this.handleTitleChange}
    	handleCategoryChange={this.handleCategoryChange}
    	handleImgChange={this.handleImgChange}
    	title={this.state.title}
    	categories={this.state.categories}
    	/>
    );
  }
}

export default BlogFormContainer;