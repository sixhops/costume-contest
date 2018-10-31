var express = require('express');
var router = express.Router();
var students = require('../controllers/studentsController');

// get all
router.get("/", students.index);
// send the create form
router.get("/new", students.new);
// get one
router.get("/:id", students.show);
// create one
router.post("/", students.create);
// add costume
router.get("/:sid/costumes/:cid", students.addCostume)

module.exports = router;