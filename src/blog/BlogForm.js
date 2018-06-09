import React, { Component } from 'react';
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import './Blog.css';
import 'draft-js-emoji-plugin/lib/plugin.css';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;


class BlogForm extends Component {
	constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.onChange.bind(this);
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

  render() {
    return (
    	<div>
    		<h1>Hey Beautiful! Look at you bloggin!</h1>
	      <Editor 
	      	id="text-editor"
	      	editorState={this.state.editorState}
	      	handleKeyCommand={this.handleKeyCommand}
	      	onChange={this.onChange}
	      	plugins={[emojiPlugin]}/>
	      	<EmojiSuggestions />
    	</div>
    );
  }
}

export default BlogForm;