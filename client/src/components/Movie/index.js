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