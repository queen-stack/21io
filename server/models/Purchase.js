const { Schema } = require('mongoose');

const purchaseSchema = new Schema(
    {
        purchaseId: {
            type: int,
            required: true,
        },
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

module.exports = purchaseSchema;