var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: {
        type: String,
        required: true
    }
    

});

var blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    
    userId: String,
    addedBy: String,

    comments: [commentSchema] 
    
    

    },
    {

        timestamps: true 

    }); 


module.exports = mongoose.model('Blog', blogSchema);