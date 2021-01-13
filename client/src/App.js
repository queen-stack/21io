import React, { useEffect, useState } from 'react';
import './App.css';
import Slideshow from '../src/components/Slideshow'; // Slideshow Component
import Navbar from '../src/components/Navbar'; // Navbar component
import Movie from '../src/components/Movie'; // Movie component

const theatreMovies = 'https://api.themoviedb.org/discover/movie?sort_by=popularity.desc&550?api_key=d70418f0a8a661cab8f71cdbdb3da10d'
const featured = 'https://api.themoviedb.org/movie/popular/api_key=d70418f0a8a661cab8f71cdbdb3da10d&page=1'
//const featured = 'https://api.themoviedb.org/3/movie/550?api_key=d70418f0a8a661cab8f71cdbdb3da10d'
const movieImages = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
const searchMovie = 'https://api.themoviedb.org/3/search/movie?api_key=d70418f0a8a661cab8f71cdbdb3da10d&language=en-US&page=1&include_adult=false'
const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=d70418f0a8a661cab8f71cdbdb3da10d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'


function App() {

  // for testing the movies => const movies = ['1', '2', '3']

  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch(discover)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results);
      })
  },[])

  // -=- NOTES -=-
  // {movies.length > 0 && movies.map((movie)
  // Need to have movies.length > 0 or else it throws an error

  // <Movie key={movie.id} {...movie}
  // key={movie.id} -> making each movie ID a key
  // {...movie} -> is getting each movie separately 

  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <section className='movie-section'>
        <div>{movies.length > 0 && movies.map((movie) => (
          <Movie 
          key={movie.id}
          {...movie}
          />
        ))}</div>
      </section>
    </div>
  );
}

export default App;
