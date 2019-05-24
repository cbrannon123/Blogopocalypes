var router = require('express').Router();
var namesCtrl = require('../controllers/names')


router.get('/names', namesCtrl.index);

/* GET users listing. */


module.exports = router;
