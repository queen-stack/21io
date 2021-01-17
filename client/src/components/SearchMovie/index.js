import React, { useState, useEffect } from 'react';
// import SearchInput from '../SearchInput';
import Grid from '@material-ui/core/Grid';
import DiscoverMovieList from '../MovieCards';
import stockImage from '../../images/stockPhoto.jpg';

// This uses the Material UI cards -> https://material-ui.com/components/cards/#Media
const SearchMovie = (props) => {

  // searchValue is the users search text they insert
  // setSearchedTitles is the search data
  const [ searchValue, setSearchedTitles ] = useState('');
  const [ movies, setMovies ] = useState([]);


 const apiSearch = async (searchValue) => {
  if(!searchValue || searchValue === '') {
    return <h3>Search for Movie Titles</h3>;
  } else {
    // key for the api
  const key = process.env.REACT_APP_API_KEY
  // Getting data from the API
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${searchValue}&page=1&include_adult=false`);
  // awaiting the json() results
  const responseJson = await response.json();
  setMovies(responseJson.results)

  const noImage = 'https://image.tmdb.org/t/p/w1280/' + stockImage;
/*
  console.log(
    responseJson.results[0].poster_path
    )
    */

   for(let i = 0; i < responseJson.results.length; i += 30) {
    //var noImage = responseJson.results[i].backdrop_path

    if(!responseJson.results[i].backdrop_path || responseJson.results[i].backdrop_path === null){
      console.log('hit the first')
      return noImage
    }

    if(!responseJson.results[i].poster_path || responseJson.results[i].poster_path === null){
      console.log('hit this')
      return noImage
    }
  }
    
  }
}

// useEffect initiates movieRequest() on page load
useEffect (() => {
    apiSearch(searchValue)
}, [searchValue]);


if(!apiSearch(searchValue) || !searchValue) {
  return(
    <div>
      <div className="input-container">
      <input
      className='searchInput'
        value={searchValue}
        onChange={(event) => setSearchedTitles(event.target.value)}
        placeholder='Search for Movie Titles'
        ></input>
        </div> 
        <h2 className='noTitles'>Search for Movie Titles</h2>
        <h4 className='noTitles'>Use the search input to find titles based on a word or by a specific name</h4>

    </div>
  )
} 


  return (
    <div className='search-page'>
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