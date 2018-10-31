var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var costumeSchema = new Schema({
    name: String,
    scariness: {
        type: Number,
        min: 0,
        max: 9
    }
});

module.exports = mongoose.model('Costume', costumeSchema);
