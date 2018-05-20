import React, { Component } from 'react';
import ReactImageFallback from "react-image-fallback";

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './Store.css';


class StorePreview extends Component {
  render() {
    return (
      <Card className="card margin-2">
        <ReactImageFallback src={this.props.img}
          className="media"
  				initialImage="/images/loading_icon.gif"
  				fallbackImage="/images/profile2018.png"/>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.name}
          </Typography>
          <Typography component="p">
            {this.props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" color="primary">
            Buy On Amazon
          </Button>
          <Button variant="outlined" size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default StorePreview;