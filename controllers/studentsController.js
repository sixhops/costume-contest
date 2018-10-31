var Costume = require('../models/Costume');
var Student = require('../models/Student');

module.exports = {
    index: function(req, res, next) {
        Student.find({}).populate('costumes').exec()
            .then(function(students) {
                res.render('students/index', {students});
            });
    },
    show: function(req, res, next) {
        Student.findById(req.params.id).populate('costumes').exec()
            .then(function(student) {
                Costume.find({})
                    .then(function(costumes) {
                        res.render('students/show', {student, costumes});
                    });
            });
    },
    new: function(req, res, next) {
        res.render('students/new');
    },
    create: function(req, res, next) {
        var student = new Student(req.body);
        student.save()
            .then(function(student) {
                // res.redirect("/students/" + student._id);
                res.redirect(`/students/${student._id}`);
            })
    },
    addCostume: function(req, res, next) {
        console.log("inside addCostume function");
        Student.findById(req.params.sid)
            .then(function(student) {
                console.log("found a student:", student);
                student.costumes.push(req.params.cid);
                student.save().then(function() {
                    res.send("hi there");
                });
            })
    }
}