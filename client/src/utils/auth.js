import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(localStorage.getItem('id_token'));
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    let token = this.getToken();

    if (!token) {
      token = localStorage.getItem('id_token');
      // if (!token) {
      //   token = localStorage.getItem('oathToken');
      // }
    }
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  oauthLogin(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('oauthToken', idToken);
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.clear();
    // localStorage.removeItem('oauthToken');

    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
