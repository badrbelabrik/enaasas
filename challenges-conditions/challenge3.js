const prompt = require("prompt-sync")();

let age = Number(prompt("Entrez votre age :"));

if (isNaN(N)) {
  console.log("Ce n'est pas un age valide");
} else if (age >= 18) {
  console.log("Éligible au vote");
} else {
  console.log("Non éligible");
}
