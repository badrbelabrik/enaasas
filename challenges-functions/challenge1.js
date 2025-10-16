const prompt = require("prompt-sync")();
let nombres = [];
let element = Number(prompt("Combien delement tu veux dans le tableau :"));

for (let i = 0; i < element; i++) {
  let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
  nombres.push(N);
}
function sommetableau(tab) {
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
  }
  return sum;
}

let total = sommetableau(nombres);
console.log(`la somme total de lelements du tableau est : ${total}`);
