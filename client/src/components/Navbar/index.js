// -=- Import section -=-
import React, { useState } from 'react';
import GoogleSignIn from '../GoogleSignIn';
import GoogleSignOut from '../GoogleSignOut';
import Auth from '../../utils/auth';
import navLogo from '../../images/logo2_yellow.svg';

// import Material UI styles
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// installing Material UI, look at https://material-ui.com/getting-started/installation/
// editing the navbar look at https://material-ui.com/components/app-bar/

// -=- This is the styling used for the navbar component -=-
// link color is a custom CSS color, in index.css under ".MuiToolbar-root"
const useStyles = makeStyles((theme) => ({
  background: {
    background: '#505b61',

  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  }
}));

// -=- Navbar structure -=-
export default function Navbar(props) {

  const classes = useStyles();

  // this is for the logged in user
  // const loggedIn = Auth.loggedIn();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.background}>
        <Toolbar>
            { Auth.loggedIn() ? (
              <>
            <div>
                <Button color="inherit" href='/'><img alt='21io' className="logoImage" src={navLogo}></img></Button>
                <Button color="inherit" href='/search'>Search for Movies</Button>
                <Button color="inherit" href='/wishlist'>Wish List</Button>
                <Button color="inherit">History</Button>
              <div className={classes.loginLogoutDiv}>
                <Button color="inherit">Signup</Button>
                <Button color="inherit">Login</Button>
              </div>
            </div>
            <GoogleSignOut/>
            </>
            ):(
            <GoogleSignIn/> 
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
