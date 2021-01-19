import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($input: movieInput) {
    addMovie(input: $input) {
      _id
      email
      wishlistCount
      wishlist {
        movieId
        description
        name
        image
      }
      purchaseHistoryCount
      purchaseHistory {
        moviePurchase {
          movieId
          description
          name
          image
        }
        purchaseDate
      }
    }
  }
`;
