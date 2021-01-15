import React from 'react';
// import Auth from "../../utils/auth";
import { GoogleLogin } from 'react-google-login';
// import { refreshTokenSetup } from '../../utils/helpers';

function GoogleButton() {

  const onSuccess = async (googleUser) => {
    
    console.log(googleUser);
    // const idToken = googleUser.getAuthResponse().id_token
    // refreshTokenSetup(res); 
    // Auth.login(idToken);
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'https://localhost:3001/graphql');
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.onload = function() {
    // console.log('Signed in as: ' + xhr.responseText);
    // };
    // xhr.send('idtoken=' + accessToken);
    // //  
    
    
    };
    const onFailure = (res) => {
    console.log('Google login unsuccessful!', res );
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.CLIENT_ID}
        buttonText="LOGIN"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy='single_host_origin'
        />
    </div>
  );
}

export default GoogleButton;