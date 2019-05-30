const Blog = require('../models/Blog');
const User = require('../models/User');



module.exports = {
    new: newPost,
    create,
    index,
    deletePost,
    updatePost,
    updatePostT,
    viewPost
};

function viewPost(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        res.render('blogs/view', {blog})
        
    });
}

function updatePostT(req, res) {
    Blog.findById(req.params.id, function (err, blog) {
        blog.title = req.body.editTitle;
        blog.save();
        res.redirect('back');
        
    });
    }



function updatePost(req, res) {
    Blog.findById(req.params.id, function (err, blog) {
        blog.text = req.body.edit;
        blog.save();
        res.redirect('back');
        
    });
    }
        


function deletePost(req, res) {
    Blog.findByIdAndDelete(req.params.id, function(err, blog) {
        blog.save();
        //console.log(blogs);
        res.redirect("back");
    });
}


function create(req, res) {
    var blog = new Blog(req.body);
    blog.userId = req.user._id;
    blog.addedBy = req.user.name;
    blog.save(function(err) {
        if (err) res.render("blogs/new");
        console.log(blog);
        res.redirect('/show')
    });
}

function newPost(req, res) {
    res.render('blogs/new')
}

function index(req, res){
    Blog.find({}, function(err, blogs){
        if (blogs.length < 1) {
            res.redirect("/new")
        }
        res.render('blogs/show', {
            blogs
        });
    });
}