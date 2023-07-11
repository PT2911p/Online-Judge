const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const GOOGLE_CLIENT_ID = "251031715698-2lg4jfp96iubmirnvuor70kt1q398gak.apps.googleusercontent.com"

const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user, done) => {
    done(null, user)
} )

passport.deserializeUser((user, done) => {
    done(null, user)
} )