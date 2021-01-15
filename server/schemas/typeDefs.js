const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Movie {
        movieId: Int
        description: String
        name: String
        image: String
    }

    type User {
        _id: ID
        email: String
        wishListCount: Int
        wishList: [Movie]
        purchaseHistory: [Purchase]
    }
  
    input movieInput {
        movieId: Int
        name: String
        description: String
        image: String
    }

    type Purchase {
        moviePurchase: Movie
        purchaseDate: String
    }

    type Query {
        user: User     
        purchase(_id: ID!): Purchase
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addUser(email: String!, password: String!): Auth
        addMovie(input: movieInput): User
        removeMovie(movieId: Int!): User
        purchaseMovie(movieId: Int!): User
    }
`;

module.exports = typeDefs; 