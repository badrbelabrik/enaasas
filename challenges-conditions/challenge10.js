const prompt = require("prompt-sync")();

let username = prompt("Entrez votre nom dutilisateur :");
let pwd = prompt("Entrez votre mot de passe :");

if (username == "admin" && pwd == "1234") {
  console.log("Bienvenue Admin");
} else if (username == "admin" && pwd !== "1234") {
  console.log("Mot de passe incorrect");
} else if (username !== "admin" && pwd == "1234") {
  console.log("Utilisateur introuvable");
} else {
  console.log("Utilisateur introuvable ou mot de passe incorrect");
}
