const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Movie.js
const movieSchema = require('./Movie');
const Purchase = require('./Purchase');

const userSchema = new Schema(
  {
    email: {// this is the username
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set wishList to be an array of data that adheres to the movieSchema
    wishList: [movieSchema],
    purchaseHistory: [Purchase.schema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hashes user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds); //cost factor controls how much time is needed to calculate a single BCrypt hash
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `movieCount` with the number of wishList movies we have
userSchema.virtual('movieCount').get(function () {
  return this.wishList.length;
});

const User = model('User', userSchema);

module.exports = User;
