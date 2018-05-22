import React, { Component } from 'react';
import './Store.css';
import ReactImageFallback from "react-image-fallback";
import AmazonButton from '../ui-components/AmazonButton'
import {Panel} from 'react-bootstrap';

class StoreItem extends Component {
  render() {
    return (
      <div className="container">
        <ReactImageFallback src={this.props.img}
          className="item-img"
          initialImage="/images/loading_icon.gif"
          fallbackImage="https://upload.wikimedia.org/wikipedia/commons/a/af/Notfound.png"/>
        <div className="store-right">
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p> 
          <h3>My take</h3>
          <p>{this.props.myTake}</p>
        </div>
        <div>
          <AmazonButton url={this.props.url} variant="outlined" size="small" color="primary">
            Buy On Amazon
          </AmazonButton>
          <Panel bsStyle="info" className="panel">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Support This Site</Panel.Title>
            </Panel.Heading>
            <Panel.Body>If you go to amazon by clicking the button above, and buy <em>anything</em>, we get a small commission! In turn, we donate 5% of our commissions to <a href="http://www.afsafund.org/">The American Fibromyalgia Syndrome Association</a></Panel.Body>
          </Panel>
        </div>

      </div>
    );
  }
}

export default StoreItem;



