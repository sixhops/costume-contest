var Costume = require('../models/Costume');

module.exports = {
    show: function(req, res, next) {
        Costume.findById(req.params.id)
            .then(function(costume) {
                res.status(200).json({costume});
            })
    },

    create: function(req, res, next) {
        var costume = new Costume(req.body);
        costume.save()
            .then(function(costume) {
                res.status(200);
            })
    }
}