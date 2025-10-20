const prompt = require("prompt-sync")();

const voiture = { marque: "peugeot", modele: 208, annee: 2020 };

voiture.marque = "renault";
voiture;
voiture.annee = 2023;
voiture.couleur = "rouge";
delete voiture.modele;
console.log(voiture);
