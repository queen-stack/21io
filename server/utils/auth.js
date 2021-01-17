const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysupersecret';
const expiration = '2h';
module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }
    console.log('token', token);
    let decodedData; 
    if (!token) {
      return req;
    }

    try {
      decodedData = jwt.decode(token);
      req.userId = decodedData.sub;
    } catch {
      console.log('Invalid token');
    }
    // return updated request object
    console.log(decodedData);
    return req;
  },

  signToken: function ({ password, email, _id }) {
    const payload = { email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
