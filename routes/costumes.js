var express = require('express');
var router = express.Router();
var costumes = require('../controllers/costumesController');

// get one
router.get("/:id", costumes.show);
// create one
router.post("/", costumes.create);

module.exports = router;