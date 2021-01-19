const { User, Movie, Purchase } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // Convert hard-coded AST string to type expected by parseValue
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});


const resolvers = {

  Date: dateScalar,

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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // OK
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addMovie: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { 
            wishlist: {
              input
            } 
          }},
          { new: true }
        );
        console.log('movie added!')
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!')
    },

    // OK
    removeMovie: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { wishlist: { movieId: args.movieId } } },
          { new: true }
        );
        console.log(updatedUser)
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

        // If no user found, throw an exception.  TBD

        // find the movie in the user's wishlist based on the movieId passed in in args.
        let movieToPurchase = updatedUser.wishlist.find(function (item) {
          console.log("item.movieId: " + item.movieId + "  args.movieId: " + args.movieId);
          return item.movieId === args.movieId;
        });

        // with the movie object found in the wishlist, remove that movie from the wishlist...
        updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { wishList: { movieId: args.movieId } } },
          { new: true }
        );

        // const purchase = await Purchase.create({ moviePurchase: movieToPurchase });
        const purchase = await Purchase.create({ moviePurchase: movieToPurchase });

        // create the purchase and add that purchase to the user's puchase history.
        updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { purchaseHistory: purchase } },
          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  }
};

module.exports = resolvers;