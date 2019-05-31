const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    // heroku URL
    callbackURL: process.env.GOOGLE_CALLBACK
    // localhost
    //callbackURL: 'http://localhost:3000/oauth2callback'
},
    function (accessToken, refreshToken, profile, cb) {
        //logged in with OAuth
        User.findOne({ googleId: profile.id }, function (err, user) {
            if (err) return cb(err);
            if (user) {
                return cb(null, user);
            } else {
                var newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newUser.save(function (err) {
                    if (err) return cb(err);
                    cb(null, newUser)
                });
            }
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});