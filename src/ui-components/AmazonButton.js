import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './UI.css'

class AmazonButton extends Component {
  render() {
    return (
      <div className="button-container">
        <Button className="amazon-button" variant="outlined" size="small" color="primary">
          <a href={this.props.url}>Buy On Amazon</a>
        </Button>
      </div>
    );
  }
}

export default AmazonButton;


