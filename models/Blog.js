var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    text: String,

})

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
  
    
    },{

    
        timestamps: true 
    }); 


module.exports = mongoose.model('Blog', blogSchema);