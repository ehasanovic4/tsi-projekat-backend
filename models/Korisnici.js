const mongoose = require("mongoose");

const KorisnikSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: true,
  },
  prezime: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  napomene: {
    type: String,
    required: true,
  }
});

const KorisnikModel = mongoose.model("users", KorisnikSchema);
module.exports = KorisnikModel;