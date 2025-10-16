const prompt = require("prompt-sync")();

let chaine = prompt("Entrez la chaine du characteres :");
chaine = chaine.toLowerCase();

let count = 0;
for (let i = 0; i < chaine.length; i++) {
  let char = chaine[i];
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u" ||
    char === "y"
  ) {
    count++;
  }
}
console.log(`Nombre de voyelles :${count}`);
