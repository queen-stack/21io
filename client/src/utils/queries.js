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