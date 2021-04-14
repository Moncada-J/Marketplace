const Item = require('../models/item');

module.exports = {
  index,
  new: newListing,
  create,
  // show,
};

function index(req, res) {
    Item.find({}, function (err, items) {
        // console.log(items);
        res.render('items/index', {items})
    })
}

function newListing(req, res) {
  res.render("items/new")
}

function create(req, res) {
    const item = new Item(req.body);
    item.save(function(err) {
        console.log(item);
        if(err) return res.render("items/new");
        // console.log(item);
      })
      res.redirect("/items");
}
