import React, { Component } from 'react';
import './Store.css';
import ReactImageFallback from "react-image-fallback";
import { LinkContainer } from 'react-router-bootstrap';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Items from './Items.json'


class StoreItem extends Component {
  render() {
    return (
    	<Card className="card margin-2">
        <ReactImageFallback src={this.props.img}
          className="media center"
          initialImage="/images/loading_icon.gif"
          fallbackImage="/images/profile2018.png"/>
        <CardContent className="card-content">
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
          

          <LinkContainer to={"/items/" + this.props.id}>
              <Button variant="outlined" size="small" color="primary">
                Learn More
              </Button>
          </LinkContainer>
        </CardActions>
      </Card>
    );
  }
}

export default StoreItem;



