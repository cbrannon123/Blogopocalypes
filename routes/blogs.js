var router = require('express').Router()
var blogsCtrl =  require('../controllers/blogs')


router.get('/new', isLoggedIn, blogsCtrl.new);
router.get('/show', blogsCtrl.index);
router.get('/blogs/:id',  blogsCtrl.viewPost);
router.post('/blogs/:id/delete', blogsCtrl.deletePost);
router.post('/blogs/:id/update', blogsCtrl.updatePost)
router.post('/blogs/:id/updateT', blogsCtrl.updatePostT) //1
router.post('/new', blogsCtrl.create);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
   }







module.exports = router;