import React, { Component } from 'react';
import './Help.css';
import ReactImageFallback from "react-image-fallback";

class HelpItem extends Component {
  render() {
    return (

      <div className="container">
        <ReactImageFallback className="help-image"
          src={this.props.img}
          initialImage="/images/loading_icon.gif"
          fallbackImage="/images/just-logo.png"/>
        <div className="help-right">
          <h1><a>{this.props.name}</a></h1>
          <p>{this.props.description}</p> 
          {this.props.id !== 1984 ? <h4>My Take</h4> : ""} 
          <p>{this.props.myTake}</p>
        </div>
      </div>
    );
  }
}

export default HelpItem;



