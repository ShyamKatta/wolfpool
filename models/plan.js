var mongoose = require('mongoose');

function time_format (time) {
  return '****-****-****-' + cc.slice(cc.length-4, cc.length);
}

var planSchema = new mongoose.Schema({
  source_id: String,
  destination_id: String,
  source_lat: String,
  source_long: String,
  dest_lat: String,
  dest_long: String,
  date: {
  	type: Date,
  	format: 'YYYY-MM-DD'
 	},
  time:
  {
  	type: String,
  	format: '00:00'
  },
  no_of_people: Number,
  src_distance: Number,
  dest_distance: Number,
  vacancy: Number,
  emails: [String],
    gender_preference: Number,
    luggage: Number,
    minimum_rating: Number,
    maximum_coPassengers: Number,
  people_per_email:  [{
    email: String,
    passengers: Number
 }]
});

module.exports = mongoose.model('Plan', planSchema);
