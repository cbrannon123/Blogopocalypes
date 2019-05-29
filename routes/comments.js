var router = require('express').Router()
var commentsCtrl =  require('../controllers/comments')


router.post('/blogs/:id/comments', commentsCtrl.create);





module.exports = router;