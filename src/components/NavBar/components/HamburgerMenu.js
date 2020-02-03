import React from 'react'
import Link from 'react-router-dom/Link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

const HamburgerMenu = () => {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
  <div>
    <Button 
      aria-controls="simple-menu" 
      aria-haspopup="true" 
      variant='contained' 
      color="secondary" 
      onClick={handleClick}
      className={classes.root}
    >
      <MenuIcon></MenuIcon>
    </Button>
    <Menu
      id = "simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem component={Link} to="/">
        Home Page
      </MenuItem>
      <MenuItem component={Link} to="/GameBoard">
        Game Board
      </MenuItem>
    </Menu>
  </div>  
  );
}

export default HamburgerMenu;