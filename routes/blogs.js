var router = require('express').Router()
var blogsCtrl =  require('../controllers/blogs')


router.get('/new', isLoggedIn, blogsCtrl.new);
router.get('/show', isLoggedIn, blogsCtrl.index);
router.get('/blogs/:id',  isLoggedIn, blogsCtrl.viewPost);
router.post('/blogs/:id/delete', isLoggedIn, blogsCtrl.deletePost);
router.post('/blogs/:id/update', isLoggedIn, blogsCtrl.updatePost)
router.post('/blogs/:id/updateTitle', isLoggedIn, blogsCtrl.updatePostTitle) 
router.post('/new', isLoggedIn, blogsCtrl.create);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
   }







module.exports = router;