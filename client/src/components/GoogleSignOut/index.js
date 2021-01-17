import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Auth from '../../utils/auth';

function GoogleSignOut() {
  const onSuccess = () => {
   Auth.logout();
  };

  return (
    <div>
      <GoogleLogout
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default GoogleSignOut;