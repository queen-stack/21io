const { User, Movie, Purchase } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },

    // get a user by email
    user: async (parent, { email }) => {
      return User.findOne({ email })
        .select('-__v -password')
    },
  },

  Mutation: {
    // OK
    addUser: async (parent, args, context) => {

      return { token, user };
    },

    addMovie: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { wishList: input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!')
    },

    // OK
    removeMovie: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { wishList: { movieId: args.movieId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!')
    },

    purchaseMovie: async (parent, args, context) => {
      if (context.user) {

        // look up the user based on the user ID in the call context
        var updatedUser = await User.findById(
          { _id: context.user._id }
        );

        let movieToPurchase = updatedUser.wishList.find(function (item) {
          return item.movieId === args.movieId;
        });

        // with the movie object found in the wishlist, remove movie from wishlist
        updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { wishList: { movieId: args.movieId } } },
          { new: true }
        );

        const purchase = await Purchase.create(movieToPurchase);

        // create the purchase and add purchase to the user's purchase history
        updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { purchaseHistory: purchase } },
          { new: true }
        );

        //If no user found throw an exception - TBD

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;