/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Rsvp = require('./rsvp.model');

exports.register = function(socket) {
  Rsvp.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Rsvp.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('rsvp:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('rsvp:remove', doc);
}