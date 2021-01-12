const { Schema } = require('mongoose');

const movieSchema = new Schema(
  {
    movieId: {
      type: String,
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

module.exports = movieSchema;
