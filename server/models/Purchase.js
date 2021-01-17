const { Schema, model } = require('mongoose');
const movieSchema = require('./Movie');

const purchaseSchema = new Schema(
    {
        movie: {
            type: Schema.Types.ObjectId,
            ref: 'Movie',
            required: true
        },
        purchaseDate: {
            type: Date,
            default: Date.now
        },
    }
);

const Purchase = model('Purchase', purchaseSchema);

module.exports = Purchase;