const mongoose = require("mongoose");
const validator = require("validator");

const KorisnikSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: false,
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
    required: false,
  },
  vrijeme: {
    type: String,
    required: false,
  },
  usluga: {
    type: String,
    required: false,
  }
});

KorisnikSchema.statics.rezervisi = async function(ime, prezime, email) {
  //validacija

  if(!ime || !prezime || !email){
    throw Error('Polja za ime, prezime i email moraju biti popunjena')
  }

  if(!validator.isEmail(email)){
    throw Error("Email nije validan")
  }
}

const KorisnikModel = mongoose.model("users", KorisnikSchema);
module.exports = KorisnikModel;