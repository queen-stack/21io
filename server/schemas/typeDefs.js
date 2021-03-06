const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar Date

    type Movie {
        movieId: Int
        overview: String
        title: String
        poster_path: String
    }

    type User {
        _id: ID
        email: String
        wishlistCount: Int
        wishlist: [Movie]
        purchaseHistoryCount: Int
        purchaseHistory: [Purchase]
    }
  
    input movieInput {
        movieId: Int
        title: String
        overview: String
        poster_path: String
    }

    type Purchase {
        moviePurchase: Movie
        purchaseDate: Date
    }

    type Query {
        user: User     
        checkout: Checkout
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!): Auth
        addMovie(input: movieInput): User
        removeMovie(movieId: Int!): User
        purchaseMovie(movieId: Int!): User
    }

    type Checkout {
        session: ID
    }
`;

module.exports = typeDefs; 