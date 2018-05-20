import React, { Component } from 'react';
import './Help.css';
import ReactImageFallback from "react-image-fallback";

class HelpItem extends Component {
  render() {
    return (

      <div className="container">
        <ReactImageFallback src={this.props.img}
          initialImage="/images/loading_icon.gif"
          fallbackImage="/images/profile2018.png"/>
        <div className="help-right">
          <h1><a>{this.props.name}</a></h1>
          <p>{this.props.description}</p>  
        </div>
      </div>
    );
  }
}

export default HelpItem;



