var router = require('express').Router()
var blogsCtrl =  require('../controllers/blogs')


router.get('/new', blogsCtrl.new);




module.exports = router;