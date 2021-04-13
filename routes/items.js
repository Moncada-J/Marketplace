const express = require("express");
const router = express.Router();
const categoriesCtrl = require("../controllers/categories");


router.post("/categories/:id", categoriesCtrl.create);

module.exports = router;
