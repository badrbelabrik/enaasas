const prompt = require("prompt-sync")();

let N;
let exposant;
do {
  N = Number(prompt("Entrez un nombre :"));
  exposant = Number(prompt("Entrez l'exposant :"));
  if (N <= 0 || exposant < 0) {
    console.log("La base doit être > 0 et l'exposant ≥ 0");
  }
} while (N <= 0 || exposant < 0);

let puissance = 1;
let count = 0;

while (count < exposant) {
  puissance *= N;
  count++;
}
console.log(`la puissance de ${N} est: ${puissance}`);
