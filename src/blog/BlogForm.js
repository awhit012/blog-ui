import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createLinkPlugin from 'draft-js-anchor-plugin';
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import HeadlinesButton from '../ui-components/HeadlinesButton';
import FormLabel from '@material-ui/core/FormLabel';

import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
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
    OrderedListButton,
    BlockquoteButton,
    linkPlugin.LinkButton
  ]
});

const plugins = [emojiPlugin, toolbarPlugin, linkPlugin];
const { Toolbar } = toolbarPlugin;

class BlogForm extends Component {
  constructor() {
    super();
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.editor.focus();
  };

  render() {
    return (
    	<div>
    		<h1>Hey Beautiful! Look at you bloggin!</h1>
        <FormLabel>
          Title:
          <input type="text" value={this.props.title} onChange={this.props.handleTitleChange} />
        </FormLabel>
    		<div className="text-editor"  onClick={this.focus}>
	      	<Editor 
		      	editorState={this.props.editorState}
		      	handleKeyCommand={this.props.handleKeyCommand}
		      	onChange={this.props.onChange}
		      	ref={(element) => { this.editor = element; }}
		      	plugins={plugins}/>
		      	<EmojiSuggestions />
		      	<div className="toolbar">
	          	<Toolbar />
		      	</div>
    		</div>
        <FormLabel>
          Categories:
          <input type="text" value={this.props.categories} onChange={this.props.handleCategoryChange} />
        </FormLabel>
        <FormLabel>
          Image:
          <input type="text" value={this.props.imgUrl} onChange={this.props.handleImgChange} />
        </FormLabel>
        <FormLabel>
          Citations:
          <input type="text" value={this.props.citations} onChange={this.props.handleCitationChange} />
        </FormLabel>
    		<Button onClick={this.props.handleSubmit}>Post</Button>
    	</div>
    );
  }
}

export default BlogForm;