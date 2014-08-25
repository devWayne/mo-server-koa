var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var RelationSchema = new Schema({
  user_id: { type: ObjectId },
  user_name: { type: String },
  user_password: { type: Number }
});

mongoose.model('User', RelationSchema);
