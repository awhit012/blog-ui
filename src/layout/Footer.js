import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Layout.css';
import FaInstagram from 'react-icons/lib/fa/instagram';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <a href="https://www.instagram.com/fibroclarity" target="_blank"><FaInstagram size={30} className="Insta"/></a>
            <small>Contact: alex@fibroclarity.com | This website is not meant to serve as medical advice, but is for your health education purposes only.</small>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);