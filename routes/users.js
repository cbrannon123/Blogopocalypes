var router = require('express').Router();
var usersCtrl = require('../controllers/users')


router.get('/users', usersCtrl.index);
router.get('/comments', usersCtrl.comments);

/* GET users listing. */


module.exports = router;
