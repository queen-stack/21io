const { User, Movie } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const purchaseSchema = require('../models/Purchase');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if(context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          //.populate('wishList')
         
      
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    // get all wishList
    wishList: async (parent, { username }) => {
      const params = username ? { username } : {};
      return WishList.find(params).sort({ createdAt: -1 });
    },
  
    // get one wishList
    comment: async (parent, { _id }) => {
        return WishList.findOne({ _id });
    },

    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('wishList')
    },
    
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('wishList')
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

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

    addWishList: async (parent, args, history) => {
      if (context.user) {
        const wishList = await WishList.create({ ...args, username: history.user.username });
    
        await User.findByIdAndUpdate(
          { _id: history.user._id },
          { $push: { history: purchaseSchema._id } },
          { new: true }
        );
    
        return history;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },

    addReaction: async (parent, { commentId, reactionBody }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
    
        return updatedHistory;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },

  
    saveMovie: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedMovies: input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!')
    },

    removeMovie: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedMovies: { movieId: args.movieId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!')
    } 
  }
};

module.exports = resolvers;