const prompt = require("prompt-sync")();

let N = Number(prompt("Entrez un nombre :"));

if (isNaN(N)) {
  console.log("Ce n'est pas un nombre valide");
} else if (N > 0) {
  console.log(`${N} est un nombre positif`);
} else if (N < 0) {
  console.log(`${N} est un nombre negatif`);
} else {
  console.log(`${N} est un nombre null`);
}
