const prompt = require("prompt-sync")();

let N = Number(prompt("Entrez un nombre :"));

if (isNaN(N)) {
  console.log("Ce n'est pas un nombre valide");
} else if (N % 2 == 0) {
  console.log("Le nombre est pair");
} else {
  console.log("Le nombre est impair");
}
