import gql from 'graphql-tag'

export const QUERY_USER = gql`
    {
        user {
            _id
            email
            wishlistCount
            wishlist {
                movieId
                overview
                title
                poster_path
            }
            purchaseHistoryCount
            purchaseHistory {
                moviePurchase {
                    movieId
                    overview
                    title
                    poster_path
                }
                purchaseDate
            }
        }
    }
`;