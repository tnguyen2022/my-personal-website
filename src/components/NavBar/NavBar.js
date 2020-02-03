import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import HamburgerMenu from './components/HamburgerMenu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const themeAppBar = createMuiTheme({
  palette: {
    primary: {main: '#C2AB82'},
    //secondary: {main: '#e3f2fd'},
  },
});

const useStyles = makeStyles(theme => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: "70px",
      display: 'flex',
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px",
      background: '-webkit-linear-gradient(#E5C4B6, #A5A6C5)',
    },
    title: {
      fontSize: "35px",
      fontWeight: 'bold',
      fontFamily: "Comic Sans MS",
      // background: '-webkit-linear-gradient(#E5C4B6, #A5A6C5)',
      // WebkitBackgroundClip: 'text',
      // WebkitTextFillColor: 'transparent',
      //textColor: 'linear-gradient(45deg, #E5C4B6 30%, #A5A6C5 90%)',
    },
    menu: {
      fontSize: 30,
    },
})); 

const NavBar = ({title}) => {
  const classes = useStyles();
  

    return (
    <ThemeProvider theme={themeAppBar}>
      <AppBar
        position = 'fixed'
        className = {classes.appBar}
      >
          <Typography className={classes.title}>
          {title}
          </Typography>
        <HamburgerMenu menu={classes.menu}/>
      </AppBar>
    </ThemeProvider>
    )
}

export default NavBar;