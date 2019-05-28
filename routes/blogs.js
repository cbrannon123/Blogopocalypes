var router = require('express').Router()
var blogsCtrl =  require('../controllers/blogs')


router.get('/new', blogsCtrl.new);
router.get('/show',  blogsCtrl.index);
// router.get('/blogs',  blogsCtrl.index);


router.post('/new', blogsCtrl.create);





module.exports = router;