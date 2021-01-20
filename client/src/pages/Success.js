import React from "react";
// import Auth from '../utils/auth';

function Success() {
 
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