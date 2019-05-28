const Blog = require('../models/Blog');



module.exports = {
    new: newPost,
    create,
    index
};



function create(req, res) {
    var blog = new Blog(req.body);
    blog.save(function(err) {
        if (err) return res.render("blogs/new");
        console.log(blog);
        res.redirect('/show')
    });
}

function newPost(req, res) {
    res.render('blogs/new')
}

function index(req, res){
    Blog.find({}, function(err, blog){
        res.render('blogs/show', {
            blog
        })
    })
}