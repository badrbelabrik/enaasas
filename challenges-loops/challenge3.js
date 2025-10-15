const prompt = require("prompt-sync")();

let sum = 0;
let max = 0;
while (true) {
  let N = Number(
    prompt("Entrez un nombre positive et (<100) ou 0 pour stopper :")
  );
  if (N == 0) {
    break;
  }
  if (N > 0 && N < 100) {
    sum += N;
    if (N >= max) {
      max = N;
    }
  } else if (N > 100) {
    console.log("Le nombre est ignoree parce que il est superieur a 100:");
  } else {
    console.log("Entrez un nombre positive et (<100) ou 0 pour stopper");
  }
}
console.log(`La somme des nombres entree est : ${sum}`);
console.log(`Le max des nombres entree est : ${max}`);
