
const secretKey = 'gour';

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey
};

passport.use(
  new JwtStrategy(jwtOptions, (payload, done) => {
    return done(null, payload.user);
  })
);

  function verifyToken(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      
      if (!user) {
        return res.status(401).json({ message: 'Token not provided or invalid' });
      }
  
      req.user = user;
      next();
    })(req, res, next);
  }


  

  module.exports = verifyToken