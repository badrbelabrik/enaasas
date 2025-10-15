const prompt = require("prompt-sync")();

let A = Number(prompt("Entrez le nombre A:"));
let B = Number(prompt("Entrez le nombre B:"));

if (isNaN(A) || isNaN(B)) {
  console.log("Entrez un nombre valide");
} else if (A > B) {
  console.log(`${A} est plus grand que ${B}`);
} else if (A < B) {
  console.log(`${B} est plus grand que ${A}`);
} else {
  console.log(`les deux nombres sont egales`);
}
