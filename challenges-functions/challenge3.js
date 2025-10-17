const prompt = require("prompt-sync")();

let nombres = [];

let element = Number(prompt("Combien delement tu veux dans le tableau :"));

for (let i = 0; i < element; i++) {
  let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
  nombres.push(N);
}

let repeatedelement = Number(
  prompt("Entrez l'element que vous pouvez verifier combien de fois repetée :")
);

function compterOccurrences(tab, valeur) {
  let count = 0;
  for (let i = 0; i < tab.length; i++) {
    if (valeur === tab[i]) {
      count++;
    }
  }
  return count;
}
let result = compterOccurrences(nombres, repeatedelement);
console.log(`l'element repetée ${result} fois.`);
