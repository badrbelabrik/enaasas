const prompt = require("prompt-sync")();

let nom = prompt("Entrez votre nom :");
let prenom = prompt("Entrez votre prénom :");
let age = prompt("Entrez votre âge :");
let sexe = prompt("Entrez votre sexe :");
let telephone = prompt("Entrez votre numéro de téléphone :");

document.write("<h2>Informations Personnelles</h2>");
document.write("<p><strong>Nom:</strong> " + nom + "</p>");
document.write("<p><strong>Prénom:</strong> " + prenom + "</p>");
document.write("<p><strong>Âge:</strong> " + age + "</p>");
document.write("<p><strong>Sexe:</strong> " + sexe + "</p>");
document.write("<p><strong>Téléphone:</strong> " + telephone + "</p>");
