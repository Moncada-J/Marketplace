var express = require('express');
var router = express.Router();
const categoriesCtrl = require('../controllers/categories');

router.get("/", categoriesCtrl.index);
router.get("/new", categoriesCtrl.new);
router.get("/:id", categoriesCtrl.show);
router.post("/", categoriesCtrl.create);


module.exports = router;
