import React from "react";

function Success() {
 
  setTimeout(function() {window.location = "/purchase-history";}, 3000);

  return(
    <div>
      <div className="input-container">
        </div> 
        <h2 className='noTitles'>Thank you for your purchase!</h2>
        <h4 className='noTitles'>You will now be redirected to your Movies!</h4>

    </div>
  )
};

export default Success; 