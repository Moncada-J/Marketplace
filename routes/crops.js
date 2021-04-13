var express = require('express');
var router = express.Router();
const cropsCtrl = require('../controllers/crops');

router.get("/", cropsCtrl.index);
router.post("/", cropsCtrl.create);
router.get("/new", cropsCtrl.new);
router.get("/:id", cropsCtrl.show);


module.exports = router;
