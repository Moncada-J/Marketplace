const Category = require('../models/category');

module.exports = {
    index, 
    new: newListing,
    show,
    create, 
};

function index(req, res) {
    Category.find({}, function(err, categories) {
        console.log(categories);
        res.render('categories/index', {title: "My Categories", categories});
    });
}
function newListing(req, res, next) {
    // console.log(testNewListing);
    res.render('categories/new', {title:"Create Listing"});
}


function show(req, res, next) {
    Category.findById(req.params.id, function (err, category) {
        res.render("categories/show", {category});
    });
}


function create(req, res) {
    const listing = new Listing(req.body);
    listing.save(function(err) {
        if(err) return res.redirect('/categories/new');
        res.redirect(`/categories/${categories._id}`);
    });
}