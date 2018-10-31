var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name: String,
    costumes: [{type: Schema.Types.ObjectId, ref: 'Costume'}]
});

module.exports = mongoose.model('Student', studentSchema);
