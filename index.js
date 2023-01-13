const express = require("express");
const app = express();
const mongoose = require("mongoose");
const KorisnikModel = require("./models/Korisnici");
const validator = require("validator");

const cors = require('cors')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://edina:sifrazatsi@cluster0.cjnbwvc.mongodb.net/proba?retryWrites=true&w=majority");

app.get("/getKorisnici", (req, res) => {
    KorisnikModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
   });
 });

 app.post("/createKorisnik", async (req, res) => {
  const korisnik = req.body
  
  
  const noviKorisnik = new KorisnikModel(korisnik);
  //var letters = /^[A-Za-z]+$/;
  //KorisnikSchema.statics.rezervisi();
  if(!noviKorisnik.ime || !noviKorisnik.prezime || !noviKorisnik.email){
    res.json("Polja za ime, prezime i email moraju biti popunjena");
  }
  else if(!validator.isAlpha(noviKorisnik.ime)){
    res.json("Unesite ispravno ime");
  }
  else if(!validator.isAlpha(noviKorisnik.ime)){
    res.json("Unesite ispravno prezime");
  }
  else if(!validator.isEmail(noviKorisnik.email)){
    res.json("Email nije validan")
  }

  else{
  await noviKorisnik.save();
  res.json(korisnik);
  }
 })


app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});