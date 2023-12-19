const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const path = require('path');
const axios = require('axios'); // Make sure to install axios using: npm install axios

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
};

module.exports = (passport) => {
  passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      // Fetch user data from the JSON file
      const response = await axios.get('http://localhost:3002/users');
      const users = response.data;

      // Find the user by ID in the fetched data
      const user = users.find((u) => u._id === jwt_payload.sub);

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      console.error('Error fetching user data', error);
      return done(error, false);
    }
  }));
};
