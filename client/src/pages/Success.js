import React from "react";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";
// import Auth from '../utils/auth';

function Success() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  setTimeout(function() {window.location = "/";}, 3000);

  return(
    <div>
      <div className="input-container">
        </div> 
        <h2 className='noTitles'>Thank you for your purchase!</h2>
        <h4 className='noTitles'>You will now be redirected to the homepage!</h4>

    </div>
  )
};

export default Success; 