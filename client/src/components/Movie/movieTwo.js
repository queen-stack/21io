/*
import React from 'react';



// -=- NOTES -=-
// The css for each movie title is custom (inside the index.css file)

// This is the image path for each card header
const api_img = 'https://image.tmdb.org/t/p/w1280'

const movie = ({ title, poster_path, overview, vote_average }) => (
        <div className='movie-container'>
            <div>
                <div className="card-info-container">
                    <h3 className='card-title'>{title}</h3>
                    <div
                        className="movie">
                        <img src={api_img + poster_path}
                        alt={title} 
                        className='movie-img'
                        />
                        <p className='card-description'>{overview}</p>
                        <p className='votes'>Rating: {vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
)

export default movie;

// getting data from the api
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

// in app js's return statement, use this
<div>{movies.length > 0 && movies.map((movie) => (
          <Movie 
          key={movie.id}
          {...movie}
          />
        ))}</div>
        */