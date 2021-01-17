import React from "react";
// import { Link } from "react-router-dom";

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
      <div className="container my-1">

        {user ? (
          <>
            <h2>Wishlist for {user.email}</h2>
            
          </>
        ) : (
          <h2> Add movies you've been wanting to see!</h2>
        )}

      </div>

    </>)

};

export default Wishlist;
