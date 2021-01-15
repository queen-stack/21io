import gql from 'graphql-tag';

export const SAVE_BOOK = gql`
    mutation saveMovie($movieId: ID!, $description: Sting!, $name: String!, $image: String!) {
        saveBook(movieId: $movieId, description: $description, name: $name, image: $image) {
            _id
        }
    }
`;