const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    movieId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    poster_path: {
      type: String,
    },
    _id: false
  }
);

const Movie = model('Movie' , movieSchema);
module.exports = Movie;
