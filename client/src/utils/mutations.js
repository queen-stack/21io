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
    mutation saveMovie($movieId: ID!, $description: Sting!, $name: String!, $image: String!) {
        saveMovie(movieId: $movieId, description: $description, name: $name, image: $image) {
            _id
        }
    }
`;
