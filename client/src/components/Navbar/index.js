// -=- Import section -=-
import React, { useState } from 'react';
import SearchInput from '../Search';
import GoogleButton from '../GoogleButton';

import Auth from '../../utils/auth';

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
export default function Navbar() {
  const [search, setSearch] = useState('');


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.background}>
        <Toolbar>
            <SearchInput search={search} setSearch={setSearch}/>
            { Auth.loggedIn() ? (
              <>
            <div>
                <Button color="inherit">Wish List</Button>
                <Button color="inherit">History</Button>
            </div>
            </>
            ):(
            <GoogleButton/> 
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
