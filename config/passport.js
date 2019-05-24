const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Name = require('../models/name')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {
    //logged in with OAuth
    Name.findOne({googleId: profile.id}, function(err, name) {
        if (err) return cb(err);
        if (name) {
            return cb(null, name);
        } else {
            var newName = new Name({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });
            newName.save(function(err) {
                if (err) return cb(err);
                 cb(null, newName)
            });
        }
    });
}
));

passport.serializeUser(function(name, done) {
    done(null, name.id);
});

passport.deserializeUser(function(id, done) {
    Name.findById(id, function(err, name) {
        done(err, name);
    });
});