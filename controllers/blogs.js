const Blog = require('../models/Blog');
const User = require('../models/User');



module.exports = {
    new: newPost,
    create,
    index,
    deletePost,
    updatePost,
    updatePostTitle,
    viewPost
};

function viewPost(req, res) {
    var user = req.user;
    Blog.findById(req.params.id)
        .exec(function (err, blog) {
            var ids = blog.comments.map(function (comment) {
                return comment.user;
            })

            User.find({
                "_id": {
                    $in: ids
                }
            })
                .exec(function (err, allUsers) {
                    console.log(allUsers)
                    res.render('blogs/view', { blog, allUsers, user })
                })
        })
}

function updatePostTitle(req, res) {
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
    Blog.findByIdAndDelete(req.params.id, function (err, blog) {
        blog.save();
        //console.log(blogs);
        res.redirect("back");
    });
}


function create(req, res) {
    var blog = new Blog(req.body);
    blog.userId = req.user.id;
    blog.addedBy = req.user.name;
    User.findById(req.user.id, function (err, user) {
        user.posts.push(blog.id);
        user.save();
    });
    blog.save(function (err) {
        res.render('blogs/new')

    });
    res.redirect('/show')
}

function newPost(req, res) {
    res.render('blogs/new')
}


function index(req, res) {
    Blog.find({}).populate('user').exec(function (err, blogs) {
        if (blogs.length < 1) {
            res.redirect("/new")
        }
        res.render('blogs/show', {
            blogs, user: req.user
        })
    });
}


