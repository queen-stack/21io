import gql from 'graphql-tag'

export const QUERY_USER = gql`
    {
        me {
            _id
            email
            wishListCount
            wishList {
                movieId
                description
                name
                image
            }
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

export const QUERY_PURCHASE = gql `
    {
        purchase (email: String!) {
            moviePurchase {
                    movieId
                    description
                    name
                    image
                }
            purchaseDate
        }
    }
`;
