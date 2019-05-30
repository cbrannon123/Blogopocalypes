var router = require('express').Router()
var commentsCtrl = require('../controllers/comments')


router.post('/blogs/:id/content', commentsCtrl.create);



module.exports = router;