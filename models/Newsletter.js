const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

const newsletterSchema = new mongoose.Schema({
  nome: String,
  email: String,
  estado: String,
  cidade: String,
}, schemaOptions);

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
