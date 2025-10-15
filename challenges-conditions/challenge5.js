const prompt = require("prompt-sync")();

let score = Number(prompt("Entrez votre score:"));

if (isNaN(score)) {
  console.log("Ce n'est pas un score valide");
} else if (score >= 90 && score <= 100) {
  console.log("Note: A");
} else if (score >= 80 && score <= 89) {
  console.log("Note: B");
} else if (score >= 70 && score <= 79) {
  console.log("Note: C");
} else if (score >= 60 && score <= 69) {
  console.log("Note: D");
} else {
  console.log("Note: F");
}
