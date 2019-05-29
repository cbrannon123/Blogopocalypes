var router = require('express').Router()
var blogsCtrl =  require('../controllers/blogs')


router.get('/new', blogsCtrl.new);
router.get('/show', blogsCtrl.index);
// router.get('/blogs',  blogsCtrl.show);
router.put('/blogs/:id', blogsCtrl.updatePost)
router.post('/blogs/:id/delete', blogsCtrl.deletePost);
router.post('/new', blogsCtrl.create);







module.exports = router;