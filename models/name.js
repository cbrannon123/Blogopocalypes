var mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String

}, {
    timestamps: true
});

module.exports = mongoose.model ('Name', nameSchema);