var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  questionID: {type: String, required: true},
  questionText: {type: String, required: true},
  questionRecommendation: {type: String, required: true},
  questionResponse: { type: String},
  questionComment: {type: String}
});

module.exports = mongoose.model('CEQuestion', schema);
