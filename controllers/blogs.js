const Blog = require('../models/Blog');


module.exports = {
    new: newPost

};

function newPost(req, res) {
    res.render('blogs/new')
}