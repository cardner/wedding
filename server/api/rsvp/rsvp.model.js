'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RsvpSchema = new Schema({
  name: String,
  email: String,
  guestName: String,
  numberAttending: String,
  dietary: String,
  songs: Object,
  hotel: String,
  note: String
});

module.exports = mongoose.model('Rsvp', RsvpSchema);
