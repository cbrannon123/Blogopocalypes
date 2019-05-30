var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }

}, {
    timestamps: true
});

module.exports = mongoose.model ('User', userSchema);