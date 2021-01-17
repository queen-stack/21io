const { Schema, model } = require('mongoose');
const Movie = require('./Movie');

const purchaseSchema = new Schema(
    {
        moviePurchase: Movie.schema,
        purchaseDate: {
            type: Date,
            default: Date.now
        },
    }
);

const Purchase = model('Purchase', purchaseSchema);

module.exports = Purchase;