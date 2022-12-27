const express = require("express");
const app = express();
const mongoose = require("mongoose");
const KorisnikModel = require("./models/Korisnici");

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

app.listen(3003, () => {
    console.log("SERVER RUNS PERFECTLY!");
});