import React, { useState, useEffect } from 'react';
// import SearchInput from '../SearchInput';
import Grid from '@material-ui/core/Grid';
import DiscoverMovieList from '../MovieCards';

// This uses the Material UI cards -> https://material-ui.com/components/cards/#Media
const SearchMovie = () => {

  // searchValue is the users search text they insert
  // setSearchedTitles is the search data
  const [ searchValue, setSearchedTitles ] = useState('');
  const [ movies, setMovies ] = useState([]);


 const apiSearch = async (searchValue) => {
  // key for the api
  const key = process.env.REACT_APP_API_KEY
  // Getting data from the API
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${searchValue}&page=1&include_adult=false`);
  // awaiting the json() results
  const responseJson = await response.json();

  // logging the data in the console and using the results from that data to the landing page
  console.log(responseJson);
  // setting data from API
  if (responseJson.results) {
    setMovies(responseJson.results)
    } else if (!responseJson.results){
      return <h3>Search for Titles</h3>;
    }
}

// useEffect initiates movieRequest() on page load
useEffect (() => {
    apiSearch(searchValue)
}, [searchValue]);

  return (
    <div>
    <div className="input-container">
    <input
    className='searchInput'
      value={searchValue}
      onChange={(event) => setSearchedTitles(event.target.value)}
      placeholder='Search for Movie Titles'
      ></input>
      </div>
    <Grid container spacing={0}>
      <Grid container item xs={12} spacing={0}>
        <DiscoverMovieList movies={movies} setSearchedTitles={setSearchedTitles}/>
      </Grid>
  </Grid>
    </div>
  );
}

export default SearchMovie;