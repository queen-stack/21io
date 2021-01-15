const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysupersecret';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({req}) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    let decodedData; 
    if (!token) {
      // return res.status(400).json({ message: 'You have no token!' });
      return req;
    }

    // verify token and get user data out of it
    try {
      decodedData = jwt.decode(token);
      req.userId = decodedData.sub;
      console.log(decodedData);
    } catch {
      console.log('Invalid token');
      // return res.status(400).json({ message: 'invalid token!' });
    }
    // return updated request object
    return req;
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
