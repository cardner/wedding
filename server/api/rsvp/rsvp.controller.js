'use strict';

var _ = require('lodash');
var Rsvp = require('./rsvp.model');

// Get list of rsvps
exports.index = function(req, res) {
  Rsvp.find(function (err, rsvps) {
    if(err) { return handleError(res, err); }
    return res.json(200, rsvps);
  });
};

// Get a single rsvp
exports.show = function(req, res) {
  Rsvp.findById(req.params.id, function (err, rsvp) {
    if(err) { return handleError(res, err); }
    if(!rsvp) { return res.send(404); }
    return res.json(rsvp);
  });
};

// Creates a new rsvp in the DB.
exports.create = function(req, res) {
  Rsvp.create(req.body, function(err, rsvp) {
    if(err) { return handleError(res, err); }
    return res.json(201, rsvp);
  });
};

// Updates an existing rsvp in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Rsvp.findById(req.params.id, function (err, rsvp) {
    if (err) { return handleError(res, err); }
    if(!rsvp) { return res.send(404); }
    var updated = _.merge(rsvp, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, rsvp);
    });
  });
};

// Deletes a rsvp from the DB.
exports.destroy = function(req, res) {
  Rsvp.findById(req.params.id, function (err, rsvp) {
    if(err) { return handleError(res, err); }
    if(!rsvp) { return res.send(404); }
    rsvp.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}