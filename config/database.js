var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

    var db = mongoose.connection;

    db.on('connected', function() {
        console.log(`Connected to MongoDB at ${process.env.DATABASE_URL}`);
    });

module.exports = mongoose;

//tweak Oauth domain nname