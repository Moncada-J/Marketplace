const Category = require('../models/category');

module.exports = {
    index,
};

function index(req, res) {
    Category.find({}, function(err, categories) {
        console.log(categories);
        res.render('categories/index', {title: "My Categories", categories});
    });
}