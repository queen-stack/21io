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