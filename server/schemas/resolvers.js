const { User, Movie, Purchase } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
        const userData = await User.findOne({_id: context.user._id})
          .select('-__v -password')
          .populate('wishlist')
          .populate('purchaseHistory');
    
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const purchaseID = Math.floor(Math.random()*(10000 - 1) + 1);
        // generate product id
      const purchase = await stripe.products.create({
        id: purchaseID,
        name: "donation",
      });
      //generate price id using the product id
      const price = await stripe.prices.create({
        product: purchase.id,
        unit_amount: 210,
        currency: "usd",
      });
      let line_items = [{
        price: price.id,
        quantity: 1
      }];
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });
      return { session: session.id };

    }
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
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { 
            wishlist: {
              movieId: input.movieId,
              title: input.title,
              overview: input.overview,
              poster_path: input.poster_path
            } 
          }},
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
        console.log(args.movieId);
        // // If no user found, throw an exception.  TBD

        // // find the movie in the user's wishlist based on the movieId passed in in args.
        let matchedMovie = updatedUser.wishlist.find((movie) => movie.movieId === args.movieId);

        // // with the movie object found in the wishlist, remove that movie from the wishlist...
        updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { wishlist: { movieId: args.movieId } } },
          { new: true }
        );
        
        // const purchase = await Purchase.create({ moviePurchase: movieToPurchase });
        const purchase = await Purchase.create({ moviePurchase: matchedMovie });

        console.log("purchase" , updatedUser)
        // // create the purchase and add that purchase to the user's purchase history.
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