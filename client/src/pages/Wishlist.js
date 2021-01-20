import React from "react";
import Navbar from '../components/Navbar';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";
// import Auth from '../utils/auth';
import Grid from '@material-ui/core/Grid';
import MovieCards from '../components/MovieCards';

function Wishlist() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
    <Navbar/>
      <div>
        {user ? (
          <>
         <section className='movie-section'>
            <Grid container spacing={0}>
            <h2>Wishlist for {user.email}</h2>
              <Grid container item xs={12} spacing={0}>
              <MovieCards movies={user.wishlist}/>
              </Grid>
            </Grid>
      </section>
      </>
        ) : ( 
        <h2> Add the movies you've been wanting to see!</h2>
        )}

      </div>
      </>
  );
};

export default Wishlist; 