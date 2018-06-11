import React, { Component } from 'react';
import { EditorState, RichUtils, convertToRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createLinkPlugin from 'draft-js-anchor-plugin';
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import HeadlinesButton from '../ui-components/HeadlinesButton';
import {stateToHTML} from 'draft-js-export-html';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
import './Blog.css';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import Button from '@material-ui/core/Button';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;
const linkPlugin = createLinkPlugin();
const toolbarPlugin = createToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    Separator,
    HeadlinesButton,
    UnorderedListButton,
    BlockquoteButton,
    linkPlugin.LinkButton
  ]
});

const { Toolbar } = toolbarPlugin;
const plugins = [emojiPlugin, toolbarPlugin, linkPlugin];

let options = {
  inlineStyles: {
    // Override default element (`strong`).
    BOLD: {element: 'b'},
    ITALIC: {
      // Add custom attributes. You can also use React-style `className`.
      attributes: {class: 'foo'},
      // Use camel-case. Units (`px`) will be added where necessary.
      style: {fontSize: 12}
    },
    // Use a custom inline style. Default element is `span`.
    RED: {style: {color: '#900'}},
  },
};


class BlogForm extends Component {
	constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.onChange.bind(this);
    this.focus = this.focus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  focus() {
    this.editor.focus();
  };

  handleSubmit() {
    const contentState = this.state.editorState.getCurrentContent();
    // console.log('content state', convertToRaw(contentState));
    let html = stateToHTML(contentState, options);
    console.log(html)

  }

  render() {
    return (
    	<div>
    		<h1>Hey Beautiful! Look at you bloggin!</h1>
    		<div className="text-editor"  onClick={this.focus}>
	      	<Editor 
		      	editorState={this.state.editorState}
		      	handleKeyCommand={this.handleKeyCommand}
		      	onChange={this.onChange}
		      	ref={(element) => { this.editor = element; }}
		      	plugins={plugins}/>
		      	<EmojiSuggestions />
		      	<div className="toolbar">
	          	<Toolbar />
		      	</div>
    		</div>
    		<Button onClick={this.handleSubmit}>Post</Button>
    	</div>
    );
  }
}

export default BlogForm;