var express = require('express');
var router = express.Router();
const categoriesCtrl = require('../controllers/categories');

router.get("/", categoriesCtrl.index);
router.post("/", categoriesCtrl.create);
router.get("/new", categoriesCtrl.new);
router.get("/:id", categoriesCtrl.show);
// router.put("/categories/:id", categoriesCtrl.addItem);

module.exports = router;
