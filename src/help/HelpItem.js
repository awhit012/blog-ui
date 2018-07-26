import React, { Component } from 'react';
import './Help.css';
import ReactImageFallback from "react-image-fallback";

class HelpItem extends Component {
  render() {
    return (

      <div className="container">
        <ReactImageFallback className="help-image"
          src={this.props.item.img}
          initialImage="/images/loading_icon.gif"
          fallbackImage="/images/just-logo.png"/>
        <div className="help-right">
          <h1><a href={this.props.item.url} target="_blank">{this.props.item.name}</a></h1>
          <p>{this.props.item.description}</p> 
          {this.props.item.id !== 1984 ? <h4>My Take</h4> : ""} 
          <p>{this.props.item.myTake}</p>
        </div>
      </div>
    );
  }
}

export default HelpItem;



