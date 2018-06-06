import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './UI.css';


class CategoriesMenu extends React.Component {
  state = {
    anchorEl: null,
    buttonText: "Filter by Category"
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCategoryClick = (category) => {
    if(category === "All") {
      this.setState({buttonText: "Filter by Category"});
    } else {
      this.setState({buttonText: category});
    }

    this.props.handleFilterClick(category)
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    let categories = this.props.categories;

    if(categories[0] !== "All") {
      categories.unshift("All");
    }

    let menuItems = categories.map((category, index) => {
      return <MenuItem 
        onClick={ () => {this.handleCategoryClick(category)}}
        key={index}>
          {category}
        </MenuItem>
    })
    return (
      <span>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.state.buttonText} &#32; &#9660;
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {menuItems}
        </Menu>
      </span>
    );
  }
}

export default CategoriesMenu;