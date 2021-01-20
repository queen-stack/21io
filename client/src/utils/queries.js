import gql from 'graphql-tag'

export const QUERY_USER = gql`
    {
        user {
            _id
            email
            wishlistCount
            wishlist {
                movieId
                description
                name
                poster_path
            }
            purchaseHistoryCount
            purchaseHistory {
                moviePurchase {
                    movieId
                    description
                    name
                    poster_path
                }
                purchaseDate
            }
        }
    }
`;