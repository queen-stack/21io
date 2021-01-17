import React from 'react';
import Auth from "../../utils/auth";
import { GoogleLogin } from 'react-google-login';

function GoogleSignIn() {

  const onSuccess = (googleUser) => {
    
    console.log(googleUser);
    const idToken = googleUser.getAuthResponse().id_token;
    Auth.oauthLogin(idToken);
    
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
        cookiePolicy={'single_host_origin'}
        />
    </div>
  );
}

export default GoogleSignIn;