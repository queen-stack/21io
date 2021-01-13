import React, { useEffect, useState } from 'react';
import './App.css';
import Slideshow from '../src/components/Slideshow'; // Slideshow Component
import Navbar from '../src/components/Navbar'; // Navbar component
import DiscoverMovieList from '../src/components/Movie'; // Movie component

// Putting the api urls here as a note, need to make changes to some of these URLs 
//const theatreMovies = 'https://api.themoviedb.org/discover/movie?sort_by=popularity.desc&550?api_key=d70418f0a8a661cab8f71cdbdb3da10d'
//const featured = 'https://api.themoviedb.org/movie/popular/api_key=d70418f0a8a661cab8f71cdbdb3da10d&page=1'
//const featured = 'https://api.themoviedb.org/3/movie/550?api_key=d70418f0a8a661cab8f71cdbdb3da10d'
//const movieImages = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
//const searchMovie = 'https://api.themoviedb.org/3/search/movie?api_key=d70418f0a8a661cab8f71cdbdb3da10d&language=en-US&page=1&include_adult=false'
//const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=d70418f0a8a661cab8f71cdbdb3da10d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'


function App() {
 
  //const [search, setSearch] = useState('');
  const [ movies, setMovies ] = useState([]);

  // movieRequest() for the movie data in the API
  const movieRequest = async (props) => {
    // API Url calls
    // const featured = 'https://api.themoviedb.org/3/movie/550?api_key=d70418f0a8a661cab8f71cdbdb3da10d'
    const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=d70418f0a8a661cab8f71cdbdb3da10d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'

    // Getting data from the API
    const response = await fetch(discover);
    const responseJson = await response.json();

    // logging the data in the console and using the results from that data to the landing page
    console.log(responseJson);
    setMovies(responseJson.results)
  }

  // useEffect initiates movieRequest() on page load
  useEffect (() => {
    movieRequest()
  }, [])

  // -=- COMPONENT NOTES -=-
  // <DiscoverMovieList /> component is for the discover API calls
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <section className='movie-section'>
        <DiscoverMovieList movies={movies}/>
      </section>
    </div>
  );
}

export default App;
