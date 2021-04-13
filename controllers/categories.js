const Category = require('../models/category');

module.exports = {
    index, 
    new: newListing,
    create, 
    show,
    addItem
};

function index(req, res) {
    Category.find({}, function(err, categories) {
        console.log(categories);
        res.render('categories/index', {title: "My Categories", categories});
    });
}
function newListing(req, res) {
  // console.log(testNewListing);
  res.render("categories/new", { title: "Create Listing" });
}

function create(req, res) {
  const category = new Category(req.body);
  console.log('Adding to category')
    category.save(function (err) {
        if (err) return res.redirect("/categories/new");
        res.redirect('/categories');
        // res.redirect(`/categories/${categories._id}`);
  });
}

function show(req, res, next) {
    Category.findById(req.params.id, function (err, category) {
        res.render("categories/show", {category});
    });
}
function addItem (req, res) {
}
    // console.log(addItem());
    // console.log('adds Item');
    // Category.findById(req.params.id, function(err, category) {
    //     category.items.push(req.body);
    //     item.save(function(err){
    //         res.redirect(`/categories/${item._id}`);
    //     });
    // });
// }
