import React from "react";
import Navbar from '../components/Navbar';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

function Wishlist() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
    <Navbar/>
      <div className="container my-1">
        {user ? (
          <>
            <h2>Wishlist for {user.email}</h2>
            {/* {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img
                          alt={name}
                          src={`/images/${image}`}
                        />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))} */}
          </>
        ) : ( 
        <h2> Add the movies you've been wanting to see!</h2>
        )}

      </div>

    </>)

};

export default Wishlist; 