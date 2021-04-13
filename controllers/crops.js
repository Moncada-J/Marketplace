const Crop = require('../models/crop');

module.exports = {
    index, 
    new: newListing,
    create, 
    show,
};

function index(req, res) {
    Crop.find({}, function(err, crops) {
        console.log(crops);
        res.render('crops/index', {title: "My Crops", crops});
    });
}
function newListing(req, res) {
  // console.log(testNewListing);
  res.render("crops/new", { title: "Create Listing" });
}

function create(req, res) {
  const Crop = new Crop(req.body);
  console.log('Adding to Crop')
    Crop.save(function (err) {
        if (err) return res.redirect("/crops/new");
        res.redirect('/crops');
        // res.redirect(`/crops/${crops._id}`);
  });
}

function show(req, res, next) {
    Crop.findById(req.params.id, function (err, Crop) {
        res.render("crops/show", {Crop});
    });
}
