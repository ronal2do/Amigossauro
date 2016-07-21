const request = require('request');
const moment = require('moment');
const Newsletter = require('../models/Newsletter');

const callback = function (err, data, res) {
  if (err) return console.log('ERRO: ', err);
  return res.json(data);
};

/**
 * POST /newsletter
 */
exports.newsletterPost = function(req, res) {

  const body = req.body;
  const newsletter = new Newsletter(body);

  newsletter.save((err, data) => {
    callback(err, data, res);
  });

};
