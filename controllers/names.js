const Name = require('../models/name');

module.exports = {
    index
};

function index(req, res, next) {
    console.log(req.query)
    
    let modelQuery = req.query.name;
    // Default to sorting by name
   
    Name.find(modelQuery).exec(function(err, names) {
      if (err) return next(err);
      res.render('posts/index', { names, 
        name: req.query.name, 
        user: req.user  
       
        });
    });
}