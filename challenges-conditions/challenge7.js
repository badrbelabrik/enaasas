const prompt = require("prompt-sync")();

let pwd = prompt("Entrez votre mot de passe :");

if (pwd.length >= 8 && /\d/.test(pwd) && /[^a-zA-Z0-9]/.test(pwd)) {
  console.log("Mot de passe fort");
} else if (pwd.length > 6 && /\d/.test(pwd)) {
  console.log("Mot de passe moyen");
} else console.log("Mot de passe faible !");
