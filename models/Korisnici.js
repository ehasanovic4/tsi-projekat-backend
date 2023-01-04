const mongoose = require("mongoose");

const KorisnikSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: true,
  },
  prezime: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  napomene: {
    type: String,
    required: false,
  },
  dan: {
    type: String,
    required: true,
  },
  vrijeme: {
    type: String,
    required: true,
  },
  usluga: {
    type: String,
    required: false,
  }
});

const KorisnikModel = mongoose.model("users", KorisnikSchema);
module.exports = KorisnikModel;