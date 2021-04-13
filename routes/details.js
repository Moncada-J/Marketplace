const express = require("express");
const router = express.Router();
const cropsCtrl = require("../controllers/crops");


router.post("/crops/:id", cropsCtrl.create);

module.exports = router;
