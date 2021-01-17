const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    movieId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  }
);

const Movie = model('Movie' , movieSchema);
module.exports = Movie;
