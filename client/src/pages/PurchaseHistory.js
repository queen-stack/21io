import React from "react";

import Navbar from '../components/Navbar';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

function PurchaseHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Navbar/>
        {user ? (
          <>
            <h2>Purchase History for {user.email}</h2>
            
          </>
        ) : <h2>Movies you've seen:</h2>}

      </div>

    </>)

};

export default PurchaseHistory;
