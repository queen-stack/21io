// -=- Import section -=-
import React , { useEffect } from 'react';
import Auth from '../../utils/auth';
import navLogo from '../../images/logo2_yellow.svg';

// import Material UI styles
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { QUERY_CHECKOUT } from '../../utils/queries';

import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/react-hooks';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// installing Material UI, look at https://material-ui.com/getting-started/installation/
// editing the navbar look at https://material-ui.com/components/app-bar/

// -=- This is the styling used for the navbar component -=-
// link color is a custom CSS color, in index.css under ".MuiToolbar-root"
const useStyles = makeStyles((theme) => ({
  background: {
    background: 'linear-gradient(to right, #181a1e ,#3c4246 );',

  },
  root: {
    flexGrow: 1,
    justifyContent: 'space-evenly'

  },
  /*
  menuButton: {
    marginRight: theme.spacing(2)
  },
  */
  title: {
    flexGrow: 1,
  }
}));

// -=- Navbar structure -=-
export default function Navbar(props) {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  
  
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  

  const classes = useStyles();

  const handleDonateClick = async () => {

    try {
      await getCheckout();
    } catch (error) {
      throw new Error('something went wrong!');    
    }

  };


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.background}>
        <Toolbar className='navbar-comp'>
            <Button color="inherit" href='/'><img alt='21io' className="logoImage" src={navLogo}></img></Button>
            <Button color="inherit" href='/search'>Search Movies</Button>
            { Auth.loggedIn() ? (
              <>
            
                <Button color="inherit" href='/wishlist'>Wishlist</Button>
                <Button color="inherit" href='/watched'>Watched</Button>
            

            <Button color="inherit" href="/" onClick={()=> Auth.logout()}>Logout</Button>
            </>
            ):(
            <>
          
              <Button color="inherit" href="/signup">Signup</Button>
              <Button color="inherit" href="/login">Login</Button>
            </>
            )}
              <Button color="inherit" onClick={handleDonateClick}>Donate</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
