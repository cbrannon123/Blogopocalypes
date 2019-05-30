const User = require('../models/User');
const Blog = require('../models/Blog');
module.exports = {
    index,
    
    
};


function index(req, res, next) {
    console.log(req.query)
    
    let modelQuery = req.query.name;
    // Default to sorting by name
   
    User.find(modelQuery).exec(function(err, users) {
      if (err) return next(err);
      res.render('blogs/index', { users, 
        name: req.query.name, 
        user: req.user  
       
        });
    });
}

