const Name = require('../models/name');

module.exports = {
    index
};

function index(req, res, next) {
    console.log(req.query)
    
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Name.find(modelQuery)
    .sort(sortKey).exec(function(err, names) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('names/index', { names, name: req.query.name, sortKey });
    });
  }