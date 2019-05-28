var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author:{
        googleId: String
    }, 
        //timestamps: true 
}); 


module.exports = mongoose.model('Blog', blogSchema);