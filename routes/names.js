var router = require('express').Router();
var namesCtrl = require('../controllers/names')


router.get('/names', namesCtrl.index);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
