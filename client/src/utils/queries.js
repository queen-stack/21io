import gql from 'graphql-tag'

export const QUERY_USER = gql`
    {
        user {
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