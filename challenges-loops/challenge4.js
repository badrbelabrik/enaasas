const prompt = require("prompt-sync")();

do {
  N = Number(prompt("Entrez un nombre positive pour inversee :"));
  if (N <= 0) {
    console.log("Nombre invalide !");
  }
} while (N <= 0);
let reversed = String(N).split("").reverse().join("");
console.log(`Le nombre inversée est : ${reversed}`);
