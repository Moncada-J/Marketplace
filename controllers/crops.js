const Crop = require('../models/crop');

module.exports = {
  index,
  new: newListing,
  create,
};

function index(req, res) {
    Crop.find({}, function (err, crops) {
        console.log(crops);
        res.render('crops/index', {crops})
    })
}

function newListing(req, res) {
  res.render("crops/new")
}
function create(req, res) {
    const crop = new Crop(req.body);
    crop.save(function(err) {
        console.log(crop);
        if(err) return res.render("crops/new");
        // console.log(crop);
      })
      res.redirect("/crops")
}
// function create(req, res) {
//   const Crop = new Crop(req.body);
//   console.log('Adding to Crop')
//     Crop.save(function (err) {
//         if (err) return res.redirect("/crops/new");
//         res.redirect('/crops');
//         // res.redirect(`/crops/${crops._id}`);
//   });
// }

// function show(req, res, next) {
//     Crop.findById(req.params.id, function (err, Crop) {
//         res.render("crops/show", {Crop});
//     });
// }
