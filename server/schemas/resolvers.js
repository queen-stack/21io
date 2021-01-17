const { User, Movie } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const purchaseSchema = require('../models/Purchase');

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
        const updatedUser = await User.findOneAndUpdate(
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

        // There are three steps to this process:
        // 1) remove the move from the wishlist (error if not found)
        // 2) create a Purchase with the Movie data
        // 3) add the newly created Purchase to the users purchaseHistory
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { wishList: { movieId: args.movieId } } },
          { new: true }
        );

        updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { purchaseHistory: { movieId: args.movieId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },


  //   addPurchased: async (parent, { purchase }, context) => {
      
  //     if (context.user) {
  //       const purchased = new Order({ purchase });

  //       await User.findByIdAndUpdate(context.user._id, { $push: { purchaseHistory: purchased } });

  //       return purchased;
  //     }

  //     throw new AuthenticationError('Not logged in');
  //   },

  }
};

module.exports = resolvers;