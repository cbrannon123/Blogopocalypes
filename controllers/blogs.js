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
    // Blog.findById(req.params.id, function(err, blog) {
    //     blog.comments.forEach(element => {
            
    //         console.log(element)
    //     });
    //     res.render('blogs/view', {blog})
        
    // });
    var user = req.user;
    Blog.findById(req.params.id)
    .exec(function(err, blog){
        var ids = blog.comments.map(function(comment) {
            return comment.user;
        })
        console.log(ids);
        // console.log(blog.comments)
        // User.find({}, function(err, allUsers){
        //     // console.log(allUsers)
        // })
        User.find({
            "_id": {
                $in: ids
            }
        })
        .exec(function(err, allUsers){
            // allUsers.forEach(u => {
            //     if(blog.comments.includes(u._id)){
            //         console.log("hi")
            //     }
            // })
            // console.log("HITTING")
            console.log(allUsers)
            res.render('blogs/view', {blog, allUsers, user})
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