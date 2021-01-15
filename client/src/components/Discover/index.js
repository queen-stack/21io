import React, { useEffect, useState } from 'react';

// importing Material UI styling
import Grid from '@material-ui/core/Grid';

import DiscoverMovieList from '../MovieCards';

const DiscoverMovies = () => {
   const [ movies, setMovies ] = useState([]);

  // movieRequest() for the movie data in the API
  const movieRequest = async (props) => {
    // key for the api
    const key = process.env.REACT_APP_API_KEY
    // Getting data from the API
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    // awaiting the json() results
    const responseJson = await response.json();

    // logging the data in the console and using the results from that data to the landing page
    // console.log(responseJson);
    // setting data from API
    setMovies(responseJson.results)
  }

  // useEffect initiates movieRequest() on page load
  useEffect (() => {
    movieRequest()
  }, [])

  // -=- COMPONENT NOTES -=-
  // <DiscoverMovieList /> component is for the discover API calls
  return (

    <div>
      <section className='movie-section'>
        <Grid container spacing={0}>
        <h2 className='discoverTitle'>Discover new movie titles</h2>
          <Grid container item xs={12} spacing={0}>
            <DiscoverMovieList movies={movies}/>
          </Grid>
        </Grid>
      </section>
    </div>

  );
}

export default DiscoverMovies;
