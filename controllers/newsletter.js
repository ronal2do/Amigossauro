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
    res.send({ msg: 'Obrigado! Você foi cadastrado em nossa lista de Novidades.' });
  });

};

/**
 * GET /newsletter
 */
exports.newsletterGet = function(req, res) {

   Newsletter.find((err, data) => {
    if (err) return console.log("ERRO: ", err);
  	return res.json(data);
  });

};

/**
 * GET /newsletter/:id
 */
exports.newsletterGetId = function(req, res) {

   Newsletter.findById((err, data) => {
    res.send({id:req.params.id, name: "The Name", description: "description"});
  	return res.json(data);
  });

};
