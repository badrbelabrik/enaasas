const prompt = require("prompt-sync")();

function factorielle() {
  let N;
  do {
    N = Number(prompt("Entrez un nombre :"));
    if (N < 0) {
      console.log("Erreur : le nombre doit être ≥ 0 pour une racine carrée.");
    }
  } while (N < 0);
  let fact = 1;
  for (i = 1; i <= N; i++) {
    fact *= i;
  }
  return fact;
}

let result = factorielle();

console.log(`le resultats est ${result}`);
