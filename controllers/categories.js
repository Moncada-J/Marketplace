const Category = require('../models/category');

module.exports = {
    index,
    show, 
    new: newListing,
    create, 
};

function index(req, res) {
    Category.find({}, function(err, categories) {
        console.log(categories);
        res.render('categories/index', {title: "My Categories", categories});
    });
}

function show(req, res) {
    Category.findById(req.params.id, function (err, category) {
        res.render("categories/show", {category});
    });
}

function newListing(req, res) {
    res.render('categories/new', {title:"Create Listing"});
}

function create(req, res) {
    const listing = new Listing(req.body);
    listing.save(function(err) {
        if(err) return res.redirect('/categories/new');
        res.redirect(`/categories/${categorie._id}`);
    });
}