const prompt = require("prompt-sync")();

let distance = Number(prompt("Entrez la distance :"));
let vitesse = Number(prompt("Entrez la vitesse de votre voiture :"));

let temps = distance / vitesse;
console.log(`Le temps pour votre voyage est :${temps} heures`);
