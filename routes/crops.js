var express = require('express');
var router = express.Router();
const cropsCtrl = require('../controllers/crops');

router.get("/", cropsCtrl.index);
router.get("/new", cropsCtrl.new);
// router.get("/:id", cropsCtrl.show);
router.post("/", cropsCtrl.create);
// router.post("/crops/:id", detailsCtrl.create);


module.exports = router;
