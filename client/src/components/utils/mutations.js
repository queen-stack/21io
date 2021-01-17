import gql from 'graphql-tag';

export const ADD_MOVIE = gql`
    mutation saveMovie($movieId: ID!, $description: Sting!, $name: String!, $image: String!) {
        saveMovie(movieId: $movieId, description: $description, name: $name, image: $image) {
            _id
        }
    }
`;
